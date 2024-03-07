import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { userReducer, productsReducer, catalogReducer } from "./redusers";

const reducer = combineReducers({
	// userState: userReducer,
	productsState: productsReducer,
	catalogState: catalogReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
