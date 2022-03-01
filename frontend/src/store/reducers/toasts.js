import { v4 as uuidv4 } from "uuid";
import { TOAST_SHOW, TOAST_DISMISS } from "store/actions/toasts";

const initialState = [];

const toastsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOAST_SHOW:
      state = [
        ...state,
        { message: action.message, variant: action.variant, id: uuidv4() },
      ];
      break;

    case TOAST_DISMISS:
      state = state.filter((el) => el.id !== action.id);
      break;

    default:
      break;
  }

  return state;
};

export default toastsReducer;
