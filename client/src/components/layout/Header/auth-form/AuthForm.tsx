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

const AuthForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthField>({
		mode: 'onChange'
	})

	const { user, setData } = useAuth()

	const { mutate: login } = useMutation(
		'login',
		(data: IAuthField) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setData) {
					setData(data)
				}
			}
		}
	)

	const { mutate: registration } = useMutation(
		'registration',
		(data: IAuthField) =>
			AuthService.register(data.email, data.name, data.password),
		{
			onSuccess(data) {
				if (setData) {
					setData(data)
				}
			}
		}
	)

	const onSubmit: SubmitHandler<IAuthField> = (data) => {
		if (type === 'login') login(data)
		else registration(data)
	}

	return (
		<div className={styles.wrapper} ref={ref}>
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
									message: 'Min length should more 3 symbols'
								}
							})}
							placeholder='Name'
							error={errors.name}
						/>
					)}
					<Input
						{...register('email', {
							required: true,
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address'
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
								message: 'Min length should more 6 symbols'
							}
						})}
						type='password'
						placeholder='Password'
						error={errors.password}
					/>
					<div className={'mt-5 mb-1 text-center'}>
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm
