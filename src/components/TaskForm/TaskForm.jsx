import { useState } from 'react';
import { getId } from '../../helper/helper';
import Modal from '../Modal/Modal';
import styles from './TaskForm.module.scss';
import warningImg from '../../assets/Startled-pana.svg';

const Form = ({ onAddTask }) => {
	const [task, setTask] = useState('');
	const [error, setError] = useState('');

	const changeHandler = e => {
		setTask(e.target.value);
	};

	const submitHandler = e => {
		e.preventDefault();

		if (!task.trim()) {
			setError({
				title: 'Invalid Input!',
				message: 'Please enter a valid task detail, it cannot be empty.',
			});
			return;
		}

		onAddTask({
			id: getId(),
			description: task,
			completed: false,
		});

		setTask('');
	};

	return (
		<>
			{error && (
				<Modal
					title={error.title}
					content={error.message}
					img={warningImg}
					onClose={() => setError('')}
					closeText="Okay"
					className="delete"
				/>
			)}

			<form autoComplete="off" className={styles.form} onSubmit={submitHandler}>
				<input
					className={styles.input}
					type="text"
					placeholder="add details"
					value={task}
					onChange={changeHandler}
				/>

				<button className={styles.btn} type="submit">
					Add
				</button>
			</form>
		</>
	);
};

export default Form;
