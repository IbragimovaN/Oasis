import styles from "./Buttom.module.css";
export const Button = ({ children, type }) => {
	return (
		<button className={styles.button} type={type}>
			{children}
		</button>
	);
};
