import styles from './Button.module.scss';

const Button = props => {
	const clickHandler = () => {
		props.onClick();
	};

	return (
		<button
			type={props?.type ?? 'button'}
			className={`${styles.btn} ${styles[props?.className]}`}
			onClick={clickHandler}
		>
			{props.children}
		</button>
	);
};

export default Button;
