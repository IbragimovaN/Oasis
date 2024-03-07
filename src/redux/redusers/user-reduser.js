const initialUserState = {};

export const usersReducer = (state = initialUserState, action) => {
	switch (action.type) {
		// case 'INCREASE_AGE': {
		//   return {
		//     ...state,
		//     age: state.age + action.payload,
		//   };
		// }
		// case 'RESET_AGE': {
		//   return {
		//     ...state,
		//     age: initialUserState.age,
		//   };
		// }
		default:
			return state;
	}
};
