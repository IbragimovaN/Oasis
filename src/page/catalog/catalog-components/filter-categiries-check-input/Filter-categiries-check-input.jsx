import { useEffect, useState } from "react";
import styles from "./Filter-categories-check.module.css";

export const FilterCategiriesCheckInput = ({ item, onClickCheckboxChange }) => {
	return (
		<div className={styles.input_form}>
			<input
				className={styles.input}
				type="checkbox"
				onChange={() => onClickCheckboxChange(item.checkId)}
				// checked={checkedIdsArr.includes(item.idChecked)}
			/>
			<label className={styles.label} htmlFor={item.idChecked}>
				{item.name}
			</label>
		</div>
	);
};
