import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./Filter-panel.module.css";
import { FilterCategories } from "../filter-categories/Filter-categories";
import { Button } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
	checkedIdsArrSelector,
	currentCategorySelector,
	filterPanelTypeListSelector,
	filteredProductsSelector,
	isLoadingSelector,
	productsSelector,
} from "../../../../redux/selectors";
import {
	setCheckedIdsArrAction,
	setFilterPanelTypeListAsync,
	setFilteredProductsAction,
	setIsLoading,
	setProductsAction,
	setProductsAsync,
} from "../../../../redux/actions";
import { object } from "prop-types";
import { rest } from "lodash";

const filteredArrayFunc = (array) =>
	array.reduce((acc, currentValue) => {
		console.log("убираем одинаковые");
		const isDuplicate = acc.some((item) => item.title === currentValue.title);
		if (!isDuplicate) {
			acc.push(currentValue);
		}
		return acc;
	}, []);

export const FilterPanel = () => {
	const dispatch = useDispatch();
	const filterPanelTypelist = useSelector(filterPanelTypeListSelector);
	const products = useSelector(productsSelector);
	const [currentFilterObj, setCurrentFilterObj] = useState({});
	const [currentProducts, setCurrentProducts] = useState([]);

	useEffect(() => {
		setCurrentProducts(products);
	}, []);

	const onClickCheckboxChange = (target) => {
		if (target.checked === true) {
			if (Object.keys(currentFilterObj).includes(target.dataset.type)) {
				Object.keys(currentFilterObj).forEach((key) => {
					if (key === target.dataset.type) {
						const addObjId = [
							...currentFilterObj[target.dataset.type],
							target.id,
						];

						setCurrentFilterObj({
							...currentFilterObj,
							[target.dataset.type]: addObjId,
						});
					}
				});
			} else {
				setCurrentFilterObj({
					...currentFilterObj,
					[target.dataset.type]: [target.id],
				});
			}
		} else {
			const deleteObjId = currentFilterObj[target.dataset.type].filter(
				(checked) => checked !== target.id,
			);
			setCurrentFilterObj({
				...currentFilterObj,
				[target.dataset.type]: deleteObjId,
			});
		}
	};

	const onSubmitFilter = () => {
		console.log("currentProducts", currentProducts);
		console.log("currentFilterObj", currentFilterObj);
		let newFilteredCatalog = currentProducts;
		console.log("newFilteredCatalog", newFilteredCatalog);
		Object.keys(currentFilterObj).forEach((key) => {
			const filterValues = currentFilterObj[key];
			console.log("filterValues", filterValues);
			if (filterValues.length > 0) {
				newFilteredCatalog = newFilteredCatalog.filter((item) =>
					filterValues.includes(item[key]),
				);
			}
		});
		dispatch(setProductsAction(newFilteredCatalog));
	};

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
				<Button onClick={onSubmitFilter}>Применить фильтры</Button>
			</div>
		)
	);
};
