import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main';
import Title from './components/Title/Title';

function App() {
	return (
		<div className={styles.App}>
			<Title>#todo</Title>
			<Main />
			<Footer name="Debapriyo Das ❤️" github="https://github.com/debapriyo007" />
		</div>
	);
}

export default App;
