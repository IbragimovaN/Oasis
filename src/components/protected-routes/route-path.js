import { Authorization, MainPage } from "../../page";
import { CatalogWithAllProducts } from "../../page/catalog-with-all-products/CatalogWithAllProducts";
import { CatalogWithProductsCategory } from "../../page/catalog-with-products-category/CatalogWithProductsCategory";

export const routesPath = [
	{
		path: "/",
		element: <MainPage />,
	},
	{
		path: "/catalog",
		element: <CatalogWithAllProducts />,
	},
	{
		path: "/catalog/:idCategory",
		element: <CatalogWithProductsCategory />,
	},
	{
		path: "/login",
		element: <Authorization />,
	},
	{
		path: "/privatPage",
		element: <div>PRIVATE-PAGE</div>,
		isAuth: true,
		roles: ["ADMIN", "MODERATOR"],
	},
	{
		path: "/error",
		element: <div className="error">Ошибка доступа</div>,
	},
];
