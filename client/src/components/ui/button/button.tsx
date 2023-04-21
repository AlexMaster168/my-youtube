import React, { FC, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './button.module.scss'
import { IButton } from '@/components/ui/button/button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return <button className={cn(styles.button, className)}>{children}</button>
}

export default Button
