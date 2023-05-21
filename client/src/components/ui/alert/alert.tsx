import React from 'react';
import styles from './Alert.module.css';

interface AlertProps {
	type?: 'danger' | 'primary';
	onClose: () => void;
	title: string;
	text: string;
}

const Alert: React.FC<AlertProps> = ({ type = "danger", onClose, title, text }) => {
	const closeAlert = () => {
		onClose();
	};

	return (
		<div className={`${styles.alert} ${styles[type]}`}>
			<h3>{ title }</h3>
			<p>{ text }</p>
			<button className={styles.close} onClick={closeAlert}>
				Закрити
			</button>
		</div>
	);
};

export default Alert;
