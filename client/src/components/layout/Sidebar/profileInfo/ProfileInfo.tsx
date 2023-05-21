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
				isShowAlert(true)
				setTimeout(() => {
					isShowAlert(false)
				}, 3000)
				refetch();
			},
		}
	);

	const [isModalOpen, setIsModalOpen] = useState(false)

	const newAvatarPath = useInput(data?.user_avatarPath || '')
	const newName = useInput(data?.user_name || '')
	const newLocation = useInput(data?.user_location || '')
	const newDescription = useInput(data?.user_description || '')

	useEffect(() => {
		if (data) {
			newAvatarPath.setValue(data.user_avatarPath || '')
			newName.setValue(data.user_name || '')
			newLocation.setValue(data.user_location || '')
			newDescription.setValue(data.user_description || '')
		}
	}, [data])

	const updateProfile = () => {
		const updatedUser: IUser = {
			id: user?.id,
			avatarPath: newAvatarPath.value,
			description: newDescription.value,
			location: newLocation.value,
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
				{showAlert && <Alert title="Вітаю" text="Ви успішно оновили інформацію о профілі" type="primary" onClose={closeAlert} />}
						{data?.user_avatarPath && (
					<img src={data.user_avatarPath} alt={data.user_name} width={70} height={70} />
				)}
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				<div className='name'>Ім'я: {data?.user_name}</div>
				<div className='email'>Email: {data?.user_email}</div>
				<div className='location'>Локация: {data?.user_location}</div>
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
					placeholder="ім'я"
				/>
				<label className={styles.label} htmlFor='location'>
					Локация:
				</label>
				<input
					className={styles.input}
					type='text'
					id='location'
					{...newLocation.bind}
					placeholder='Локация'
				/>
				<label className={styles.label} htmlFor='description'>
					Опис:
				</label>
				<textarea
					className={styles.textarea}
					id='description'
					{...newDescription.bind}
					placeholder='Опис'
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
