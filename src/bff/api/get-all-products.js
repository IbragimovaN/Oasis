import { transformProduct } from "../transforms";

export const getAllProducts = async () => {
	return fetch("http://localhost:3005/catalog")
		.then((loadedProduct) => loadedProduct.json())
		.then((loadedProduct) => {
			return loadedProduct && loadedProduct.map(transformProduct);
		});
};
