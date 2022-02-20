import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "../actions/user";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      state = {
        ...state,
        username: action.username,
        accessToken: action.accessToken,
      };
      break;

    case USER_LOGOUT:
      state = initialState;
      break;

    default:
      break;
  }

  return state;
};

export default userReducer;
