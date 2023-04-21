import stylesIcons from '../icons/IconRight.module.scss'
import styles from './AuthForm.module.scss'
import React, { FC } from 'react'
import { FaUserCircle } from 'react-icons/fa'

const AuthForm: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button className={stylesIcons.button}>
				<FaUserCircle fill='#A4A4A4' />
			</button>
			<div className={styles.form}></div>
		</div>
	)
}

export default AuthForm
