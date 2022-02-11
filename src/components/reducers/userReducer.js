import { LOGIN_USER, LOGOUT_USER } from "../actions/userActionsTypes";

const LOCAL_STORAGE_NAME = "smile-app-user";
const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)) || {};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        username: action.username,
      };
      break;

    case LOGOUT_USER:
      state = {};
      break;

    default:
      break;
  }

  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
  return state;
};

export default appReducer;
