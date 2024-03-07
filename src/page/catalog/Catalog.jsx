import styles from "./Catalog.module.css";
import { useEffect, useState } from "react";
import { ProductCard } from "../product-card/Product-card";
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

export const Catalog = () => {
	const dispatch = useDispatch();

	const products = useSelector(productsSelector);
	const checkedIdsArr = useSelector(checkedIdsArrSelector);
	const currentCategory = useSelector(currentCategorySelector);
	const filterPanelTypelist = useSelector(filterPanelTypeListSelector);

	useEffect(() => {
		console.log(products);
		dispatch(setProductsAsync());
	}, [dispatch]);

	return (
		<div className="container">
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
		</div>
	);
};
