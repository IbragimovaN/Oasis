import styles from "./Menu.module.css";

export const Menu = () => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.list}>
				<li className={styles.list_item}>лицо</li>
				<li className={styles.list_item}>волосы</li>
				<li className={styles.list_item}>для мужчин</li>
				<li className={styles.list_item}>тело</li>
			</ul>
		</nav>
	);
};
