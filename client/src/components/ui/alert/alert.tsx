import React, { useEffect } from 'react';
import styles from './Alert.module.css';

interface AlertProps {
	type?: 'danger' | 'primary';
	onClose: () => void;
	title: string;
	text: string;
	duration?: number;
}

const Alert: React.FC<AlertProps> = ({
																			 type = "danger",
																			 onClose,
																			 title,
																			 text,
																			 duration = 3000,
																		 }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => {
			clearTimeout(timer);
		};
	}, [onClose, duration]);

	return (
		<div className={`${styles.alert} ${styles[type]}`}>
			<h3>{title}</h3>
			<p>{text}</p>
			<button className={styles.close} onClick={onClose}>
				Закрити
			</button>
		</div>
	);
};

export default Alert;
