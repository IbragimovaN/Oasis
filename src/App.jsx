import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import styles from "./App.module.css";
import { MainPage } from "./page/main/Main-page";

export const App = () => {
	return (
		<div>
			<Header />
			<MainPage />

			{/* <h2>Контент страницы</h2>

			<Routes>
				<Route path="/" element={<div>Главная страница</div>} />
				<Route path="/login" element={<div>Авторизация</div>} />
				<Route path="/register" element={<div>Регистрация</div>} />
				<Route path="/buyers" element={<div>Покупатели</div>} />
				<Route path="/*" element={<div>Ошибка</div>} />
			</Routes>

			<Footer /> */}
		</div>
	);
};
