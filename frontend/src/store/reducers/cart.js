import {
  CART_ADD,
  CART_REMOVE,
  CART_EMPTY,
  CART_QUANTITY_ADD,
  CART_QUANTITY_REMOVE,
} from "store/actions/cart";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD:
      state = [
        ...state,
        { product: action.product, quantity: action.quantity },
      ];
      break;

    case CART_REMOVE:
      state = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
      break;

    case CART_EMPTY:
      state = initialState;
      break;

    case CART_QUANTITY_ADD:
      const add_element = state[action.index];
      if (add_element.quantity < 10) {
        state = [
          ...state.slice(0, action.index),
          { ...add_element, quantity: add_element.quantity + 1 },
          ...state.slice(action.index + 1),
        ];
      }
      break;

    case CART_QUANTITY_REMOVE:
      const remove_element = state[action.index];
      if (remove_element.quantity > 1) {
        state = [
          ...state.slice(0, action.index),
          { ...remove_element, quantity: remove_element.quantity - 1 },
          ...state.slice(action.index + 1),
        ];
      }
      break;

    default:
      break;
  }

  return state;
};

export default cartReducer;
