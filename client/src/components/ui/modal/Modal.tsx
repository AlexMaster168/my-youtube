
import React, { FC, ReactNode } from 'react';
import styles from '@/components/ui/modal/Modal.module.scss';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className={styles['modal-overlay']}>
			<div className={styles.modal}>
				<button className={styles['close-button']} onClick={onClose}>
					&#10005;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
