import { LoadingAction, LOADING_ACTION_TYPE } from "store/actions/loading";

export type LoadingState = boolean;

const initialState: LoadingState = false;

const loadingReducer = (state = initialState, action: LoadingAction) => {
  switch (action.type) {
    case LOADING_ACTION_TYPE.FETCHDATA_START:
      state = true;
      break;

    case LOADING_ACTION_TYPE.FETCHDATA_END:
      state = false;
      break;

    default:
      break;
  }

  return state;
};

export default loadingReducer;
