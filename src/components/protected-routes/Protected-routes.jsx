import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children, roles }) => {
	const isAuth = true; //useSelector
	const userRole = "ADMIN"; //useSelector

	if (!isAuth) {
		return <Navigate to="/login" />;
	}

	const hasUserRole = () => {
		return roles.includes(userRole) ? true : false;
	};

	if (!hasUserRole()) {
		return <Navigate to="/error" />;
	}
	return <div>{children}</div>;
};
