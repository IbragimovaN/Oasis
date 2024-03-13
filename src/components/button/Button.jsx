import styles from "./Buttom.module.css";
export const Button = ({ children, type, onClick }) => {
	return (
		<button className={styles.button} type={type} onClick={onClick}>
			{children}
		</button>
	);
};
