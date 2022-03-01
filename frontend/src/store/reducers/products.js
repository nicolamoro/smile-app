import { PRODUCTS_GET_SUCCESS } from "store/actions/products";

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_GET_SUCCESS:
      state = action.products;
      break;

    default:
      break;
  }

  return state;
};

export default productsReducer;
