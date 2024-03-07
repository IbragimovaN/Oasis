import styles from "./Input.module.css";
import { forwardRef } from "react";

export const Input = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={styles.input} {...props} ref={ref}></input>;
});
