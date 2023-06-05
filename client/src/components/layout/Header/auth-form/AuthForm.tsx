import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'
import { useMutation } from 'react-query'
import Button from '@/components/ui/button/button'
import Input from '@/components/ui/input/input'
import { AuthService } from '@/services/auth/auth.service'
import { useAuth } from '@/hooks/useAuth'
import useOutside from '@/hooks/useOutside'
import stylesIcons from '../icons/IconRight.module.scss'
import styles from './AuthForm.module.scss'
import { IAuthField, validEmail, validPhone } from './auth-form-interface'
import Alert from '@/components/ui/alert/alert'
import ForgetPassword from '@/components/layout/Header/forget-password/ForgetPassword'

const AuthForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IAuthField>({
		mode: 'onChange'
	})

	const { user, setData } = useAuth()
	const [isForgotPassword, setIsForgotPassword] = useState(false)
	const [showAlert, setShowAlert] = useState(false)
	const [alertMessage, setAlertMessage] = useState('')

	const { mutate: authMutation } = useMutation(
		type === 'login' ? 'login' : 'registration',
		(data: IAuthField) => {
			if (type === 'login') {
				return AuthService.login(data.email, data.password)
			} else {
				return AuthService.register(data.email, data.name, data.phone, data.password)
			}
		},
		{
			onSuccess(data) {
				if (setData) setData(data)
			},
			onError() {
				setShowAlert(true)
				if (type === 'login') setAlertMessage('Невірні дані для авторизації')
				else setAlertMessage('Користувач c такими данними вже існує')
			}
		}
	)

	const onSubmit: SubmitHandler<IAuthField> = (data) => {
		authMutation(data)
		reset({
			phone: '',
			name: '',
			email: '',
			password: ''
		})
		setIsShow(false)
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			{isForgotPassword && <ForgetPassword onClose={() => setIsForgotPassword(false)} />}
			{showAlert && <Alert title='Помилка' text={alertMessage} onClose={() => setShowAlert(false)} />}
			{!user && (
				<button
					className={stylesIcons.button}
					onClick={() => setIsShow(!isShow)}
				>
					<FaUserCircle fill='#A4A4A4' />
				</button>
			)}
			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					{type === 'register' && (
						<>
							<Input
								{...register('name', {
									required: true,
									minLength: {
										value: 3,
										message: 'Мін довжина повинна бути 3 символи'
									}
								})}
								placeholder="Ім'я"
								error={errors.name}
							/>

							<Input
								{...register('phone', {
									required: true,
									pattern: {
										value: validPhone,
										message: 'Введить номер телефону +380'
									}
								})}
								type='tel'
								placeholder='Номер телефону'
								error={errors.phone}
							/>
						</>
					)}
					<Input
						{...register('email', {
							required: true,
							pattern: {
								value: validEmail,
								message: 'Введить корректний email'
							}
						})
						}
						placeholder='Email'
						error={errors.email}
					/>
					<Input
						{...register('password', {
							required: true,
							minLength: {
								value: 6,
								message: 'Мин длина мусит бути 6 символів'
							}
						})}
						type='password'
						placeholder='Пароль'
						error={errors.password}
					/>
					<div className={'text-center'}>
						<Button color='rgba(160, 0, 0, 0.8)' onClick={() => setType('login')}>Авторизуватися</Button>
					</div>
					<div className={'text-center'}>
						<Button color='rgba(0, 120, 0, 0.8)' onClick={() => setType('register')}>Зарегиструватися</Button>
					</div>
					<button className={styles.forget} onClick={() => setIsForgotPassword(true)}>Забули пароль
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm
