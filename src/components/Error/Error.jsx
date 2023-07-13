import styles from './Error.module.scss';

const Error = ({ text, img }) => {
	return (
		<div className={styles.error}>
			<p className={styles.error__text}>{text}</p>
			<img className={styles.error__img} src={img} alt="Illustration" />

			<a
				target="_blank"
				rel="noreferrer"
				href="https://storyset.com/holidays"
				className="icon-attribute"
			>
				Holidays illustrations by Storyset
			</a>
		</div>
	);
};

export default Error;
