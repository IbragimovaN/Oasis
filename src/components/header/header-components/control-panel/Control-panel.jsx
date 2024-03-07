import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../../button/Button";

import styles from "./Control-panel.module.css";

export const ControlPanel = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.controlPanel}>
			<div className={styles.button_wrapper}>
				{/* <Button> */}
				<Link to="/login">Войти</Link> {/* </Button> */}
			</div>
			<div className={styles.icon_wrapper}>
				<i className={`fa fa-user`} aria-hidden="true"></i>
			</div>

			<div className={styles.icon_wrapper}>
				<i className={`fa fa-shopping-bag`} aria-hidden="true"></i>
			</div>
			<div className={styles.cost}>
				00.00 <i className="fa fa-rub" aria-hidden="true"></i>
			</div>
		</div>
	);
};
