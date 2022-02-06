import smileReducer from "./components/reducers/smileReducer";
import { createStore } from "redux";

const store = createStore(
  smileReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
