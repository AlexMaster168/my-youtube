import React, { FC, useState } from 'react'
import styles from '@/components/layout/Header/forget-password/ForgetPassword.module.scss'
import Modal from '@/components/ui/modal/Modal'
import { useMutation } from 'react-query'
import Alert from '@/components/ui/alert/alert'
import { AuthService } from '@/services/auth/auth.service'
import { useForm } from 'react-hook-form'
import { IAuthPassword } from '@/services/types/auth.interface'
import Button from '@/components/ui/button/button'
import { validEmail, validPhone } from '@/components/layout/Header/auth-form/auth-form-interface'
import Input from '@/components/ui/input/input'

interface ForgetPasswordProps {
	onClose: () => void;
}

const ForgetPassword: FC<ForgetPasswordProps> = ({ onClose }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IAuthPassword>({
		mode: 'onChange'
	})

	const [showAlert, isShowAlert] = useState(false)
	const closeAlert = () => isShowAlert(false)

	const [showAlertError, isShowAlertError] = useState(false)
	const closeAlertError = () => isShowAlertError(false)

	const { mutate: forgotMutation } = useMutation(
		(data: IAuthPassword) =>
			AuthService.forgotPassword(data.email, data.phone, data.password),
		{
			onSuccess: () => {
				isShowAlert(true)
			},
			onError: () => {
				isShowAlertError(true)
			}
		}
	)
	const onSubmit = (data: IAuthPassword) => {
		forgotMutation(data)
		reset({
			phone: '',
			email: '',
			password: ''
		})
		setTimeout(() => {
			onClose()
		}, 2000)
	}

	return (
		<>
			{showAlert && (
				<Alert
					title='Вітаю'
					text='Ви успішно змінили пароль'
					type={'primary'}
					duration={2000}
					onClose={closeAlert}
				/>
			)}
			{showAlertError && (
				<Alert
					title='Помилка'
					text='Невірні дані користувача'
					duration={2000}
					onClose={closeAlertError}
				/>
			)}
			<Modal isOpen={true} onClose={onClose}>
				<Input
					{...register('email', {
						required: true,
						pattern: {
							value: validEmail,
							message: 'Введіть коректний email'
						}
					})}
					placeholder='Email'
					error={errors.email}
				/>
				<Input
					{...register('phone', {
						required: true,
						pattern: {
							value: validPhone,
							message: 'Введіть номер телефону +380'
						}
					})}
					type='tel'
					placeholder='Номер телефону'
					error={errors.phone}
				/>
				<Input
					{...register('password', {
						required: true,
						minLength: {
							value: 6,
							message: 'Мінімальна довжина має бути 6 символів'
						}
					})}
					type='password'
					placeholder='Пароль'
					error={errors.password}
				/>
				<Button
					type='button'
					className={styles.buttons}
					onClick={handleSubmit(onSubmit)}
				>
					Змінити пароль
				</Button>
				<Button
					type='button'
					className={`${styles.buttons} ${styles.buttonCancel}`}
					onClick={onClose}
				>
					Відмінити
				</Button>
			</Modal>
		</>
	)
}

export default ForgetPassword
