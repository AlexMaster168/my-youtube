import cn from 'classnames'
import React, { FC, PropsWithChildren } from 'react'
import { IButton } from './button.interface'
import styles from './button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	onClick,
	color,
	...rest
}) => {
	return (
		<button className={cn(styles.button, className)} onClick={onClick} style={{backgroundColor: color}}>
			{children}
		</button>
	)
}

export default Button
