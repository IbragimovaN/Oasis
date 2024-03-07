import { transformProduct } from "../transforms";

export const getAllProducts = async () =>
	fetch("http://localhost:3005/catalog")
		.then((loadedProduct) => loadedProduct.json())
		.then(
			(loadedProduct) => loadedProduct && loadedProduct.map(transformProduct),
		);
