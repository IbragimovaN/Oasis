import { useEffect } from "react";
import styles from "./Filter-panel.module.css";
import { FilterCategories } from "../filter-categories/Filter-categories";
import { Button } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
	checkedIdsArrSelector,
	currentCategorySelector,
	filterPanelTypeListSelector,
} from "../../../../redux/selectors";
import {
	setCheckedIdsArrAction,
	setFilterPanelTypeListAsync,
} from "../../../../redux/actions";

export const FilterPanel = () => {
	const dispatch = useDispatch();
	const filterPanelTypelist = useSelector(filterPanelTypeListSelector);
	const currentCategory = useSelector(currentCategorySelector);

	const checkedIdsArr = useSelector(checkedIdsArrSelector);

	const onClickCheckboxChange = (checkId) => {
		console.log(checkId);
		if (checkedIdsArr.includes(checkId)) {
			dispatch(
				setCheckedIdsArrAction(
					checkedIdsArr.filter((item) => item !== checkId),
				),
			);
		} else {
			dispatch(setCheckedIdsArrAction([...checkedIdsArr, checkId]));
		}
	};

	useEffect(() => {
		dispatch(setFilterPanelTypeListAsync(currentCategory.id));
		console.log(checkedIdsArr);
	}, [dispatch, currentCategory, checkedIdsArr]);
	return (
		filterPanelTypelist.length > 0 && (
			<div className={styles.filterPanel}>
				{filterPanelTypelist.map(({ id, name, checkList }) => (
					<FilterCategories
						key={id}
						id={id}
						name={name}
						checkList={checkList}
						onClickCheckboxChange={onClickCheckboxChange}
					></FilterCategories>
				))}
				<Button>Применить фильтры</Button>
			</div>
		)
	);
};
