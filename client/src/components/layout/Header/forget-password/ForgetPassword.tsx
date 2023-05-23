import React, { FC, useState } from 'react'
import styles from '@/components/layout/Header/forget-password/ForgetPassword.module.scss'
import Modal from '@/components/ui/modal/Modal'
import useInput from '@/hooks/useInput'
import { useMutation } from 'react-query'
import { IUserPassword } from '@/services/types/user.interface'
import userService from '@/services/user.service'
import Alert from '@/components/ui/alert/alert'

const ForgetPassword: FC = () => {

	const [showAlert, isShowAlert] = useState(false)
	const closeAlert = () => isShowAlert(false)

	const [showAlertError, isShowAlertError] = useState(false)
	const closeAlertError = () => isShowAlertError(false)

	const updatePasswordMutation = useMutation((data: IUserPassword) =>
		userService.forgotPassword(data.email, data.phone, data.password),
		{
			onSuccess: () => {
				isShowAlert(true)
				setTimeout(() => {
					isShowAlert(false)
				}, 3000)
			},
			onError: () => {
				isShowAlertError(true)
				setTimeout(() => {
					isShowAlertError(false)
				}, 3000)
			}
	}
	);

	const [isModalOpen, setIsModalOpen] = useState(true)
	const Email = useInput('')
	const Phone = useInput('')
	const Password = useInput('')

	const forgotPassword =  () => {
		try {
			const updatedUser: IUserPassword = {
				password: Password.value,
				phone: Phone.value,
				email: Email.value,
			};
			updatePasswordMutation.mutate(updatedUser);
		} catch (error) {
			console.error('Ошибка при обновлении пароля:', error);
		}
		setIsModalOpen(false)
	};

	return (
		<>
			{showAlert && <Alert title='Вітаю' text="Ви успішно змінили пароль" type={'primary'} onClose={closeAlert} />}
			{showAlertError && <Alert title='Помилка' text="Невірні дані користувача, або старий пароль" onClose={closeAlertError} />}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<label className={styles.label} htmlFor='myName'>
					Email
				</label>
				<input
					className={styles.input}
					type='text'
					id='myName'
					{...Email.bind}
					pattern='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'
					placeholder='Введить email'
				/>
				<label className={styles.label} htmlFor='myPhone'>
					Номер телефону
				</label>
				<input
					className={styles.input}
					type='tel'
					id='myPhone'
					{...Phone.bind}
					pattern='^\+380\d{9}$'
					placeholder='Введить номер телефону'
				/>
				<label className={styles.label} htmlFor='myPassword'>
					Номер телефону
				</label>
				<input
					className={styles.input}
					type='password'
					id='myPassword'
					{...Password.bind}
					placeholder='Введить новий пароль'
				/>
				<button
					className={styles.buttons}
					onClick={forgotPassword}
				>
					Змінити пароль
				</button>
				<button
					className={`${styles.buttons} ${styles.buttonCancel}`}
					onClick={() => setIsModalOpen(false)}
				>
					Відминити
				</button>
			</Modal>
		</>
	)
}

export default ForgetPassword
