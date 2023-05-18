import React, { FC, useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
import Loader from '@/components/ui/Loader';
import { useAuth } from '@/hooks/useAuth';
import userService from '@/services/user.service';
import Modal from '@/components/ui/modal/Modal';
import styles from '@/components/layout/Sidebar/profileInfo/ProfileInfo.module.scss';
import { IUser } from '@/services/types/user.interface';
import useInput from '@/hooks/useInput';

const ProfileInfo: FC = () => {
	const { user } = useAuth();

	const { data, isLoading } = useQuery('getProfile', () =>
			userService.getProfile(user?.id),
		{
			select: ({ data }) => data,
		}
	);

	const updateProfileMutation = useMutation((updatedUser: IUser) =>
		userService.updateProfile(updatedUser.id, updatedUser)
	);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const newAvatarPath = useInput(data?.user_avatarPath || '');
	const newName = useInput(data?.user_name || '');
	const newLocation = useInput(data?.user_location || '');
	const newDescription = useInput(data?.user_description || '');

	useEffect(() => {
		if (data) {
			newAvatarPath.setValue(data.user_avatarPath || '');
			newName.setValue(data.user_name || '');
			newLocation.setValue(data.user_location || '');
			newDescription.setValue(data.user_description || '');
		}
	}, [data]);

	const updateProfile = () => {
		const updatedUser: IUser = {
			id: user?.id,
			avatarPath: newAvatarPath.value,
			description: newDescription.value,
			location: newLocation.value,
			name: newName.value,
		};
		updateProfileMutation.mutate(updatedUser);
		setIsModalOpen(false);
	};

	return isLoading ? (
		<Loader count={5} />
	) : (
		<>
			<div className="profile_info">
				{data?.user_avatarPath && (
					<img src={data.user_avatarPath} alt={data.user_name} width={70} height={70} />
				)}
				<div className="name">Name: {data?.user_name}</div>
				<div className="email">Email: {data?.user_email}</div>
				<div className="location">Location: {data?.user_location}</div>
			</div>
			<br />
			<div className="description">{data?.user_description}</div>
			<div className="information">
				<div className="item">
					<div className="top">{data?.videosCount || 0}</div>
					<div className="bottom">videos</div>
				</div>
				<div className="item">
					<div className="top">{data?.user_subscribersCount || 0}</div>
					<div className="bottom">subscribers</div>
				</div>
			</div>
			<button
				className={`${styles.button} ${styles.marginTop}`}
				onClick={() => setIsModalOpen(true)}
			>
				Update Profile
			</button>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<label className={styles.label} htmlFor="avatarPath">
					Avatar Path:
				</label>
				<input
					className={styles.input}
					type="text"
					id="avatarPath"
					{...newAvatarPath.bind}
					placeholder="Avatar Path"
				/>
				<label className={styles.label} htmlFor="name">
					Name:
				</label>
				<input
					className={styles.input}
					type="text"
					id="name"
					{...newName.bind}
					placeholder="Name"
				/>
				<label className={styles.label} htmlFor="location">
					Location:
				</label>
				<input
					className={styles.input}
					type="text"
					id="location"
					{...newLocation.bind}
					placeholder="Location"
				/>
				<label className={styles.label} htmlFor="description">
					Description:
				</label>
				<textarea
					className={styles.textarea}
					id="description"
					{...newDescription.bind}
					placeholder="Description"
				></textarea>
				<button className={styles.button} onClick={updateProfile}>
					Save
				</button>
				<button
					className={`${styles.button} ${styles.buttonCancel}`}
					onClick={() => setIsModalOpen(false)}
				>
					Cancel
				</button>
			</Modal>
		</>
	);
};

export default ProfileInfo;
