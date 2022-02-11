import { createStore, combineReducers } from "redux";
import userReducer from "./components/reducers/userReducer";

const store = createStore(
  combineReducers({ user: userReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
