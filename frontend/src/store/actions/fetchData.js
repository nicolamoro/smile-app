import axios from "axios";
import { fetchDataEnd, fetchDataStart } from "./loading";
import { userLogout } from "./user";

const fetchRequest = (options) => {
  return async (_, getState) => {
    const state = getState();
    const user = state.user;
    const res = await axios({
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    return res.data;
  };
};

export const fetchData = (options, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDataStart());
      const res = await dispatch(fetchRequest(options));
      return res;
    } catch (e) {
      if (e.response?.status === 401) {
        dispatch(userLogout(navigate));
      }
    } finally {
      dispatch(fetchDataEnd());
    }
  };
};
