import Button from '../Button/Button';
import Task from './Task';
import styles from './TaskList.module.scss';

const TaskList = ({ tasks, onClickTask, onDeleteTask, showDeleteButton }) => {
	return (
		<>
			<ul className={styles['task-list']}>
				{tasks.map(task => (
					<Task
						key={task.id}
						id={task.id}
						task={task.description}
						completed={task.completed}
						onClick={onClickTask}
						onDelete={onDeleteTask}
						showDelete={showDeleteButton}
					/>
				))}
			</ul>

			{showDeleteButton && tasks.length ? (
				<Button className="delete" onClick={onDeleteTask}>
					<span className="material-icons">delete_outline</span>
					Delete All
				</Button>
			) : null}
		</>
	);
};

export default TaskList;
