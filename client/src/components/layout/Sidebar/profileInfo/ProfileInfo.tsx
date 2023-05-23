import React, { FC, useState, useEffect } from 'react'
import { useQuery, useMutation } from 'react-query'
import Loader from '@/components/ui/Loader'
import { useAuth } from '@/hooks/useAuth'
import userService from '@/services/user.service'
import Modal from '@/components/ui/modal/Modal'
import styles from '@/components/layout/Sidebar/profileInfo/ProfileInfo.module.scss'
import { IUser } from '@/services/types/user.interface'
import useInput from '@/hooks/useInput'
import Alert from '@/components/ui/alert/alert'
import LocationSelect from '@/components/ui/locationSelect/locationSelect'

const ProfileInfo: FC = () => {
	const { user } = useAuth()

	const { data, isLoading, refetch } = useQuery('getProfile', () =>
			userService.getProfile(user?.id),
		{
			select: ({ data }) => data,
		}
	);

	const [showAlert, isShowAlert] = useState(false)
	const closeAlert = () => isShowAlert(false)

	const updateProfileMutation = useMutation((updatedUser: IUser) =>
			userService.updateProfile(updatedUser.id, updatedUser),
		{
			onSuccess: () => {
				refetch();
			},
			onError: () => {
				isShowAlert(true)
				setTimeout(() => {
					isShowAlert(false)
				}, 3000)
			}
		}
	);

	const [isModalOpen, setIsModalOpen] = useState(false)

	const newAvatarPath = useInput(data?.user_avatarPath || '')
	const newName = useInput(data?.user_name || '')
	const [newLocation, setNewLocation] = useState(data?.user_location || '')
	const newDescription = useInput(data?.user_description || '')

	useEffect(() => {
		if (data) {
			newAvatarPath.setValue(data.user_avatarPath || '')
			newName.setValue(data.user_name || '')
			setNewLocation(data.user_location || '')
			newDescription.setValue(data.user_description || '')
		}
	}, [data])

	const updateProfile = () => {
		const updatedUser: IUser = {
			id: user?.id,
			avatarPath: newAvatarPath.value,
			description: newDescription.value,
			location: newLocation,
			name: newName.value
		}
		updateProfileMutation.mutate(updatedUser)
		setIsModalOpen(false)
	}

	return isLoading ? (
		<Loader count={5} />
	) : (
		<>
			<div className='profile_info'>
				{showAlert && <Alert title="Помилка" text="Таке ім'я вже існує" onClose={closeAlert} />}
						{data?.user_avatarPath && (
					<img src={data.user_avatarPath} alt={data.user_name} width={70} height={70} />
				)}
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				<div className='name'>Ім'я: {data?.user_name}</div>
				<div className='email'>Email: {data?.user_email}</div>
				<div className='location'>Локація: {data?.user_location}</div>
			</div>
			<br />
			<div className='description'>{data?.user_description}</div>
			<div className='information'>
				<div className='item'>
					<div className='top'>{data?.videosCount || 0}</div>
					<div className='bottom'>Видео</div>
				</div>
				<div className='item'>
					<div className='top'>{data?.user_subscribersCount || 0}</div>
					<div className='bottom'>Підписчики</div>
				</div>
			</div>
			<button
				className={`${styles.button} ${styles.marginTop}`}
				onClick={() => setIsModalOpen(true)}
			>
				Оновити профіль
			</button>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<label className={styles.label} htmlFor='avatarPath'>
					Шлях до картинки:
				</label>
				<input
					className={styles.input}
					type='text'
					id='avatarPath'
					{...newAvatarPath.bind}
					placeholder='Шлях до картинки'
				/>
				<label className={styles.label} htmlFor='name'>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					Ім'я:
				</label>
				<input
					className={styles.input}
					type='text'
					id='name'
					{...newName.bind}
					placeholder="Ім'я"
				/>
				<LocationSelect selectedLocation={newLocation} onChange={e => setNewLocation(e.target.value)} />
				<label className={styles.label} htmlFor='description'>
					Опис користувача:
				</label>
				<textarea
					className={styles.textarea}
					id='description'
					{...newDescription.bind}
					placeholder='Опис користувача'
				></textarea>
				<button className={styles.button} onClick={updateProfile}>
					Зберегти
				</button>
				<button
					className={`${styles.button} ${styles.buttonCancel}`}
					onClick={() => setIsModalOpen(false)}
				>
					Відминити
				</button>
			</Modal>
		</>
	)
}

export default ProfileInfo
