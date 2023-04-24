import stylesIcons from '../icons/IconRight.module.scss'
import styles from './AuthForm.module.scss'
import React, { FC, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthField, validEmail } from './auth-form-interface'
import Input from '@/components/ui/input/input'
import Button from '@/components/ui/button/button'

const AuthForm: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthField>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthField> = (data) => {
		console.log(`${type}`, data.email)
	}

	return (
		<div className={styles.wrapper}>
			<button className={stylesIcons.button}>
				<FaUserCircle fill='#A4A4A4' />
			</button>
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
						// @ts-ignore
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
					// @ts-ignore
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
					// @ts-ignore
					placeholder='password'
					error={errors.password}
				/>
				<div className={'mt-5 mb-1 text-center'}>
					<Button onClick={() => setType('login')}>Login</Button>
				</div>
				<button className={styles.register} onClick={() => setType('register')}>
					Register
				</button>
			</form>
		</div>
	)
}

export default AuthForm
