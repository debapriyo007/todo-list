import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import styles from './Modal.module.scss';

const Overlay = ({ onClick }) => (
	<div className={styles.overlay} onClick={onClick}></div>
);

const ModalBody = ({
	img,
	title,
	content,
	onConfirm,
	onClose,
	confirmText,
	closeText,
	className,
}) => {
	const confirmHandler = () => {
		onConfirm();
		onClose();
	};

	return (
		<div className={styles.modal}>
			<button className={styles.modal__close} onClick={onClose}>
				<span class="material-icons">close</span>
			</button>

			<div className={styles.modal__content}>
				<div className={styles['modal__content--left']}>
					<img src={img} alt="icon" />
					<a
						target="_blank"
						rel="noreferrer"
						href="https://storyset.com/people"
						className="icon-attribute"
					>
						People illustrations by Storyset
					</a>
				</div>

				<div className={styles['modal__content--right']}>
					<header>
						<h2 className={styles.heading}>{title}</h2>
					</header>

					<p className={styles.modal__text}>{content}</p>

					<footer className={styles['btn-group']}>
						<Button onClick={onClose} className={className}>
							{closeText}
						</Button>
						{onConfirm && (
							<Button className="delete" onClick={confirmHandler}>
								{confirmText}
							</Button>
						)}
					</footer>
				</div>
			</div>
		</div>
	);
};

const Modal = props => {
	return (
		<>
			{ReactDOM.createPortal(
				<Overlay onClick={props.onClose} />,
				document.getElementById('overlay')
			)}
			{ReactDOM.createPortal(
				<ModalBody
					img={props.img}
					title={props.title}
					content={props.content}
					onConfirm={props.onConfirm}
					confirmText={props.confirmText}
					closeText={props.closeText}
					onClose={props.onClose}
					className={props?.className}
				/>,
				document.getElementById('modal')
			)}
		</>
	);
};

export default Modal;
