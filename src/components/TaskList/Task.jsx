import { useState } from 'react';
import IconButton from '../Button/IconButton';
import styles from './Task.module.scss';

const Task = ({ id, task, completed, onClick, onDelete, showDelete }) => {
	const [checked, setChecked] = useState(completed);

	const changeHandler = () => {
		setChecked(!checked);
		onClick(id);
	};

	return (
		<li className={styles.task}>
			<input
				type="checkbox"
				name="task"
				id={id}
				className={styles['check-box']}
				onChange={changeHandler}
				checked={checked}
			/>
			<label htmlFor={id} className={styles['task-desc']}>
				{task}
			</label>

			{showDelete && <IconButton onClick={onDelete} id={id} />}
		</li>
	);
};

export default Task;
