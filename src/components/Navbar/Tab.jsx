import styles from './Tab.module.scss';

const Tab = ({ id, active, onClick }) => {
	const clickHandler = () => {
		if (!active) onClick(id);
	};

	return (
		<button
			className={`${styles.tab} ${active ? styles.active : ''}`}
			onClick={clickHandler}
		>
			{id}
		</button>
	);
};

export default Tab;
