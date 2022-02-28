import { toastShow } from "./toasts";

export const CART_ADD = "CART_ADD";
export const CART_REMOVE = "CART_REMOVE";
export const CART_EMPTY = "CART_EMPTY";
export const CART_QUANTITY_ADD = "CART_QUANTITY_ADD";
export const CART_QUANTITY_REMOVE = "CART_QUANTITY_REMOVE";

export const cartAdd = (product, quantity) => {
  return async (dispatch) => {
    await dispatch({
      type: CART_ADD,
      product,
      quantity,
    });
    dispatch(
      toastShow(
        `Product "${product.description}" successfully added to cart!`,
        "secondary"
      )
    );
  };
};

export const cartRemove = (index) => {
  return async (dispatch) => {
    await dispatch({
      type: CART_REMOVE,
      index,
    });
    dispatch(toastShow("Product successfully removed from cart!", "secondary"));
  };
};

export const cartEmpty = () => {
  return {
    type: CART_EMPTY,
  };
};

export const cartQuantityAdd = (index) => {
  return {
    type: CART_QUANTITY_ADD,
    index,
  };
};

export const cartQuantityRemove = (index) => {
  return {
    type: CART_QUANTITY_REMOVE,
    index,
  };
};
