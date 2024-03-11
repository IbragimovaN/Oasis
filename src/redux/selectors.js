export const productsSelector = (state) => state.productsState.products;
export const filteredProductsSelector = (state) =>
	state.productsState.filteredProducts;
export const currentCategorySelector = (state) =>
	state.catalogState.currentCategory;
export const filterPanelTypeListSelector = (state) =>
	state.catalogState.filterPanelTypelist;
export const checkedIdsArrSelector = (state) =>
	state.catalogState.checkedIdsArr;
export const isLoadingSelector = (state) => state.catalogState.isLoading;
