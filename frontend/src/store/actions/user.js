import axios from "axios";
import config from "../../config";
import { cartEmpty } from "../actions/cart";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT";

export const userLogin = (username, password) => {
  return async (dispatch) => {
    const options = {
      url: `${config.apis.login}`,
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      data: {
        username,
        password,
      },
    };

    axios(options)
      .then((result) => {
        dispatch(userLoginSuccessfully(username, result.data.access_token));
      })
      .catch((e) => {
        console.log(e);
        dispatch(userLogout());
      });
  };
};

export const userLoginSuccessfully = (username, accessToken) => {
  return {
    type: USER_LOGIN_SUCCESS,
    username,
    accessToken,
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    dispatch(cartEmpty());
    dispatch({
      type: USER_LOGOUT,
    });
  };
};
