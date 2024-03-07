import {
	SET_CURRENT_CATEGORY,
	SET_FILTER_PANEL_TYPE_LIST,
	tSET_CHECKED_IDS_ARR,
} from "../actions/constants/action-constants";

const initialCatalogState = {
	currentCategory: { id: "", name: "все товары" },
	filterPanelTypelist: [],
	checkedIdsArr: [],
};

export const catalogReducer = (state = initialCatalogState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_CURRENT_CATEGORY: {
			return {
				...state,
				currentCategory: payload,
			};
		}

		case SET_FILTER_PANEL_TYPE_LIST: {
			return {
				...state,
				filterPanelTypelist: payload,
			};
		}

		case tSET_CHECKED_IDS_ARR: {
			return {
				...state,
				checkedIdsArr: payload,
			};
		}

		default:
			return state;
	}
};
