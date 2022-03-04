import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import cartReducer from "./reducers/cart";
// import userReducer from "./reducers/user";
// import productsReducer from "./reducers/products";
import loadingReducer, { LoadingState } from "./reducers/loading";
import config from "config";
// import toastsReducer from "./reducers/toasts";
import { LoadingAction } from "./actions/loading";

export type State = {
  // user: ,
  // cart: ,
  // products: ,
  loading: LoadingState;
  // toasts: ,
};

type StoreActions = LoadingAction;

const allReducers = combineReducers<State>({
  // user: userReducer,
  // cart: cartReducer,
  // products: productsReducer,
  loading: loadingReducer,
  // toasts: toastsReducer,
});
const rootReducer = (state: State | undefined, action: StoreActions) => {
  return allReducers(state, action);
};
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const persistedStoreString = localStorage.getItem(config.localStorage);
const preloadedState = persistedStoreString
  ? JSON.parse(persistedStoreString)
  : {};

const store = createStore<State, StoreActions, unknown, unknown>(
  rootReducer,
  preloadedState,
  composedEnhancer
);
store.subscribe(() => {
  localStorage.setItem(config.localStorage, JSON.stringify(store.getState()));
});

export default store;
