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
import { IAuthField, validEmail } from './auth-form-interface'
import Alert from '@/components/ui/alert/alert'

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

	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');

	const { mutate: authMutation } = useMutation(
		type === 'login' ? 'login' : 'registration',
		(data: IAuthField) => {
			if (type === 'login') {
				return AuthService.login(data.email, data.password)
			} else {
				return AuthService.register(data.email, data.name, data.password)
			}
		},
		{
			onSuccess(data) {
				if (setData) {
					setData(data)
				}
			},
			onError() {
				setShowAlert(true);
				if (type === 'login') setAlertMessage('Невірні дані для авторизації');
				else setAlertMessage('Користувач або ім\'я вже існують');
				setTimeout(() => {
					setShowAlert(false);
				}, 3000);
			},
		}
	)

	const onSubmit: SubmitHandler<IAuthField> = (data) => {
		authMutation(data)
		reset({
			name: '',
			email: '',
			password: ''
		});
		setIsShow(false)
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			{showAlert && <Alert title="Помилка" text={alertMessage} onClose={() => setShowAlert(false)}/>}
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
						<Input
							{...register('name', {
								required: true,
								minLength: {
									value: 3,
									message: 'Мин длина мусит бути 3 символів'
								}
							})}
							placeholder="Ім'я"
							error={errors.name}
						/>
					)}
					<Input
						{...register('email', {
							required: true,
							pattern: {
								value: validEmail,
								message: 'Введить корректний email'
							}
						})}
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
						placeholder='Password'
						error={errors.password}
					/>
					<div className={'mt-5 mb-1 text-center'}>
						<Button onClick={() => setType('login')}>Авторизуватися</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Зарегиструватися
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm
