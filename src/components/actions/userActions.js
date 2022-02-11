import { LOGIN_USER, LOGOUT_USER } from "./userActionsTypes";

// user login action
export const userLogin = (username) => {
  return {
    type: LOGIN_USER,
    username,
  };
};

// user logout action
export const userLogout = () => {
  return {
    type: LOGOUT_USER,
  };
};
