import styles from "./Search.module.css";
export const Search = () => {
	return (
		<div className={styles.search}>
			<input type="text" className={styles.input} placeholder="поиск..." />
			<div className={styles.icon_wrapper}>
				<i class="fa fa-search" aria-hidden="true"></i>
			</div>
		</div>
	);
};
