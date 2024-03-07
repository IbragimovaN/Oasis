import { Search } from "../search/Search";
import styles from "./H2.module.css";
export const H2 = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<h2>{children}</h2>
			<Search></Search>
		</div>
	);
};
