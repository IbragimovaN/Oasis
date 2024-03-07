import { Authorization, Catalog, MainPage } from "../../page";

export const routesPath = [
	{
		path: "/",
		element: <MainPage />,
	},
	{
		path: "/catalog",
		element: <Catalog />,
		// children: [
		//   {
		//     path: "mask",
		//     element: <Dashboard />,
		//   },
		//   {
		//     path: "cream",
		//     element: <About />,
		//   },
		// ],
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
