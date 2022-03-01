import axios from "axios";
import config from "config";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT";

export const userLogin = (username, password, navigate) => {
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
        dispatch(
          userLoginSuccessfully(username, result.data.access_token, navigate)
        );
      })
      .catch((e) => {
        dispatch(userLogout(navigate));
      });
  };
};

export const userLoginSuccessfully = (username, accessToken, navigate) => {
  return async (dispatch) => {
    await dispatch({
      type: USER_LOGIN_SUCCESS,
      username,
      accessToken,
    });
    navigate("/");
  };
};

export const userLogout = (navigate) => {
  return async (dispatch) => {
    await dispatch({
      type: USER_LOGOUT,
    });
    navigate("/login");
  };
};
