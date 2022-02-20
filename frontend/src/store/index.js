import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cart";
import userReducer from "./reducers/user";
import config from "../config";

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });
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
