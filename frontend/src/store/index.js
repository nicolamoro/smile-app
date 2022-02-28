import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cart";
import userReducer from "./reducers/user";
import productsReducer from "./reducers/products";
import loadingReducer from "./reducers/loading";
import config from "../config";
import toastsReducer from "./reducers/toasts";

const allReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
  loading: loadingReducer,
  toasts: toastsReducer,
});
const rootReducer = (state, action) => {
  return allReducers(state, action);
};
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const persistedStoreString = localStorage.getItem(config.localStorage);
const preloadedState = persistedStoreString
  ? JSON.parse(persistedStoreString)
  : {};

const store = createStore(rootReducer, preloadedState, composedEnhancer);
store.subscribe(() => {
  localStorage.setItem(config.localStorage, JSON.stringify(store.getState()));
});

export default store;
