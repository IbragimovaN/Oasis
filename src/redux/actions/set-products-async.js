import { getAllProducts } from "../../bff/api";
import { setProductsAction } from "./set-products-action";

export const setProductsAsync = (id) => (dispatch) => {
	return getAllProducts().then((loadedProducts) => {
		const newFilteredProducts = loadedProducts.filter(
			(product) => product.category === id,
		);

		dispatch(setProductsAction(id ? newFilteredProducts : loadedProducts));
	});
};
