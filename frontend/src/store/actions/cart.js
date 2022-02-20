export const CART_ADD = "CART_ADD";
export const CART_REMOVE = "CART_REMOVE";
export const CART_EMPTY = "CART_EMPTY";
export const CART_QUANTITY_ADD = "CART_QUANTITY_ADD";
export const CART_QUANTITY_REMOVE = "CART_QUANTITY_REMOVE";

export const cartAdd = (product, quantity) => {
  return {
    type: CART_ADD,
    product,
    quantity,
  };
};

export const cartRemove = (index) => {
  return {
    type: CART_REMOVE,
    index,
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
