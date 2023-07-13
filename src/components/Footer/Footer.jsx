import styles from './Footer.module.scss';

const Footer = ({ name, github }) => {
	return (
		<footer className={styles.footer}>
			{'Created by '}
			<a className={styles.name} href={github} target="_blank" rel="noreferrer">
				{name}
			</a>
			{/* {' - '} */}
			{/* <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">
				devChallenges.io
			</a> */}
		</footer>
	);
};

export default Footer;
