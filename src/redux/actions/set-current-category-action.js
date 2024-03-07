import { SET_CURRENT_CATEGORY } from "./constants/action-constants";

export const setCurrentCategoryAction = (currentCategory) => {
	return {
		type: SET_CURRENT_CATEGORY,
		payload: currentCategory,
	};
};
