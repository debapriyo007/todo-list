import styles from './IconButton.module.scss';

const IconButton = props => {
	const clickHandler = () => {
		props.onClick(props.id);
	};

	return (
		<button
			type={props?.type ?? 'button'}
			className={`${styles.btn} ${styles[props?.className]}`}
			onClick={clickHandler}
		>
			<span className="material-icons">delete_outline</span>
		</button>
	);
};

export default IconButton;
