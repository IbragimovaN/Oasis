import styles from "./Catalog.module.css";
import { useEffect } from "react";
import { ProductCard } from "./catalog-components/product-card/Product-card";
import { getAllProducts } from "../../bff/api";
import { H2 } from "../../components/h2/H2";
import { FilterPanel } from "./catalog-components/filter-panel/Filter-panel";
import { useDispatch, useSelector } from "react-redux";
import {
	checkedIdsArrSelector,
	currentCategorySelector,
	filterPanelTypeListSelector,
	filteredProductsSelector,
	productsSelector,
} from "../../redux/selectors";
import { setProductsAsync } from "../../redux/actions/set-products-async";
import { Container } from "../../components";
import {
	setCurrentCategoryAction,
	setFilterPanelTypeListAsync,
	setIsLoading,
} from "../../redux";
import { useParams } from "react-router-dom";

export const Catalog = () => {
	const dispatch = useDispatch();

	const products = useSelector(productsSelector);
	const currentCategory = useSelector(currentCategorySelector);
	const filterPanelTypelist = useSelector(filterPanelTypeListSelector);
	const params = useParams();

	useEffect(() => {
		dispatch(setIsLoading(true));
		if (params.idCategory) {
			Promise.all([
				dispatch(setProductsAsync(params.idCategory)),
				dispatch(setCurrentCategoryAction(params?.idCategory)),
				dispatch(setFilterPanelTypeListAsync(params?.idCategory)),
			]).finally(() => {
				dispatch(setIsLoading(false));
			});
		} else {
			dispatch(setProductsAsync()).finally(() => dispatch(setIsLoading(false)));
		}
	}, [dispatch, params]);

	return (
		<Container>
			<H2>{currentCategory.name}</H2>
			<div
				className={`${styles.products} ${filterPanelTypelist.length > 0 ? styles.narrow : ""}`}
			>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			<>
				<FilterPanel />
			</>
		</Container>
	);
};
