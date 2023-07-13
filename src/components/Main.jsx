import { useEffect, useState } from 'react';
import { TYPES } from '../helper/config';
import Error from './Error/Error';
import TaskForm from './TaskForm/TaskForm';
import Modal from './Modal/Modal';
import Navbar from './Navbar/Navbar';
import TaskList from './TaskList/TaskList';
import breakImg from '../assets/Refreshing-amico.svg';
import quesImg from '../assets/Questions-pana.svg';

const Main = () => {
	const [taskList, setTaskList] = useState([]);
	const [selectedType, setSelectedType] = useState('all');
	const [showModal, setShowModal] = useState(false);

	const loadTasks = () => {
		const data = JSON.parse(localStorage.getItem('taskList'));
		if (data?.length) setTaskList(data);
	};

	const saveTasks = () => {
		localStorage.setItem('taskList', JSON.stringify(taskList));
	};

	// Load tasks from local storage when app is launched
	useEffect(loadTasks, []);

	// Save tasks in local storage if tasks get changed (also run when it loads)
	useEffect(saveTasks, [taskList]);

	const addTask = task => {
		setTaskList(prevList => {
			return [...prevList, task];
		});
	};

	const deleteCompletedTasks = () => {
		setTaskList(prevList => {
			return prevList.filter(task => !task.completed);
		});
	};

	const deleteTask = (id = '') => {
		if (!id) {
			setShowModal(true);
			return;
		}
		setTaskList(prevList => prevList.filter(task => task.id !== id));
	};

	const clickTaskHandler = id => {
		setTaskList(prevTasks =>
			prevTasks.map(task => {
				return {
					id: task.id,
					description: task.description,
					completed: id === task.id ? !task.completed : task.completed,
				};
			})
		);
	};

	const changeTypeHandler = id => setSelectedType(id);

	const getFilteredTasks = id => {
		// TYPES = ['all', 'active', 'completed'];
		if (id === TYPES[0]) return taskList;
		if (id === TYPES[2])
			return taskList.filter(task => task.completed === true);
		return taskList.filter(task => task.completed !== true);
	};

	const filteredTasks = getFilteredTasks(selectedType);

	return (
		<>
			{showModal && (
				<Modal
					img={quesImg}
					title="Delete all tasks?"
					content="	Deleting all the tasks will permanently remove them from this app"
					onConfirm={deleteCompletedTasks}
					onClose={() => setShowModal(false)}
					closeText="No, keep"
					confirmText="Yes, delete"
				/>
			)}
			<Navbar selected={selectedType} onChangeType={changeTypeHandler} />

			{selectedType !== TYPES[2] && <TaskForm onAddTask={addTask} />}

			{filteredTasks.length ? (
				<TaskList
					tasks={filteredTasks}
					onClickTask={clickTaskHandler}
					onDeleteTask={deleteTask}
					showDeleteButton={selectedType === TYPES[2]}
				/>
			) : (
				<Error text="There are no tasks" img={breakImg} />
			)}
		</>
	);
};

export default Main;
