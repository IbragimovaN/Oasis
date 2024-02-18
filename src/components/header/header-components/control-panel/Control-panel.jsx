// import { Link, useNavigate } from "react-router-dom";
import styles from "./Control-panel.module.css";

export const ControlPanel = () => {
	// const navigate = useNavigate();

	return (
		<div className={styles.controlPanel}>
			<div className={styles.icon_wrapper}>
				<i className={`fa fa-user`} aria-hidden="true"></i>
			</div>
			<div className={styles.icon_wrapper}>
				<i className={`fa fa-shopping-bag`} aria-hidden="true"></i>
			</div>
			<div className={styles.cost}>
				00.00 <i class="fa fa-rub" aria-hidden="true"></i>
			</div>
		</div>
	);
};
