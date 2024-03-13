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
	const currentCategory = useSelector(currentCategorySelector);
	const products = useSelector(productsSelector);
	const [checkedIdsArr, setCheckedIdsArr] = useState([]);
	const filteredProducts = useSelector(filteredProductsSelector);
	const [currentProducts, setCurrentProducts] = useState([]);

	useEffect(() => {
		setCurrentProducts(products);
	}, []);

	const onClickCheckboxChange = (checkId, dataTypeOfFilter) => {
		if (checkedIdsArr.includes(checkId)) {
			setCheckedIdsArr(checkedIdsArr.filter((item) => item !== checkId));

			dispatch(
				setFilteredProductsAction(
					filteredProducts.filter((item) => item[dataTypeOfFilter] !== checkId),
				),
			);
		} else {
			setCheckedIdsArr([...checkedIdsArr, checkId]);

			dispatch(
				setFilteredProductsAction([
					...filteredProducts,
					...currentProducts.filter((product) => {
						return product[dataTypeOfFilter] === checkId;
					}),
				]),
			);
		}
	};

	const onSubmitFilter = async () => {
		const ff = filteredArrayFunc(filteredProducts);
		await dispatch(setProductsAsync(currentCategory.id));
		filteredProducts.length > 0 && dispatch(setProductsAction(ff));
	};

	useEffect(() => {
		console.log(checkedIdsArr);
		console.log(currentProducts);
		console.log(filteredProducts);

		dispatch(setFilterPanelTypeListAsync(currentCategory.id));
	}, [currentCategory, dispatch, filteredProducts, currentProducts]);

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
