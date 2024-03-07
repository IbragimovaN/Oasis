import { Input } from "../input/Input";
import styles from "./Search.module.css";
export const Search = () => {
	return (
		<form className={styles.search}>
			<Input type="text" placeholder="поиск..."></Input>

			<div className={styles.icon_wrapper}>
				<i className="fa fa-search" aria-hidden="true"></i>
			</div>
		</form>
	);
};
