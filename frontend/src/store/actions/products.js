import config from "config";
import { fetchData } from "./fetchData";

export const PRODUCTS_GET = "PRODUCTS_GET";
export const PRODUCTS_GET_SUCCESS = "PRODUCTS_GET_SUCCESS";

export const productsGet = (navigate) => {
  return async (dispatch) => {
    const options = {
      url: `${config.apis.productsGet}`,
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    };

    const res = await dispatch(fetchData(options, navigate));
    return dispatch({
      type: PRODUCTS_GET_SUCCESS,
      products: res?.data || [],
    });
  };
};
