import { useDispatch, useSelector } from "react-redux";
import styles from "./Dropdown-sub-menu.module.css";

import { useNavigate } from "react-router-dom";
import { setCurrentCategoryAction } from "../../../../../../redux/actions/set-current-category-action";

import { setProductsAsync } from "../../../../../../redux/actions";

export const DropdownSubMenu = ({
	idMenuEl,
	children,
	isOpenMenuItem,
	setIsOpenMenuItem,
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onMouseLeave = () => {
		setIsOpenMenuItem(false);
	};

	const onClickSubMenuEl = async (id, dataName) => {
		dispatch(setProductsAsync(id));
		dispatch(setCurrentCategoryAction({ id: id, name: dataName }));
		navigate("/catalog");
	};
	return (
		isOpenMenuItem && (
			<nav onMouseLeave={onMouseLeave} className={styles.wrapper}>
				{children.map((item) => (
					<li
						key={item.id}
						id={item.id}
						data-name={item.name}
						onClick={({ target }) =>
							onClickSubMenuEl(target.id, target.dataset.name)
						}
						className={styles.item}
					>
						{item.name}
					</li>
				))}
			</nav>
		)
	);
};
