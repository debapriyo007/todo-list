import { TYPES } from '../../helper/config';
import styles from './Navbar.module.scss';
import Tab from './Tab';

const Navbar = ({ selected, onChangeType }) => {
	return (
		<nav className={styles.nav}>
			{TYPES.map(type => (
				<Tab
					key={type}
					id={type}
					active={selected === type}
					onClick={onChangeType}
				/>
			))}
		</nav>
	);
};

export default Navbar;
