import React, { FC } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import AuthForm from '@/components/layout/Header/auth-form/AuthForm'
import { useAuth } from '@/hooks/useAuth'
import styles from './IconRight.module.scss'

const IconsRight: FC = () => {
	const { user } = useAuth()
	return (
		<div className={styles.icons}>
			{!!user && (
				<button className={styles.button}>
					<BsPlusCircleFill fill='#CD3A42' />
				</button>
			)}
			<AuthForm />
		</div>
	)
}

export default IconsRight
