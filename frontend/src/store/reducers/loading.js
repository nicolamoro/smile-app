import { FETCHDATA_START, FETCHDATA_END } from "../actions/loading";

const initialState = false;

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHDATA_START:
      state = true;
      break;

    case FETCHDATA_END:
      state = false;
      break;

    default:
      break;
  }

  return state;
};

export default loadingReducer;
