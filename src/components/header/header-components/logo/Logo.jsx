import LOGO from "../../../../image/Logo.jpg";
import styles from "./Logo.module.css";

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<div className={styles.img_wrapper}>
				<img src={LOGO} alt="logo" className={styles.img}></img>
			</div>
			<h1 className={styles.header}>OASIS</h1>
		</div>
	);
};
