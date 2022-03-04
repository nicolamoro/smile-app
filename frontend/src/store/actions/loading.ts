export enum LOADING_ACTION_TYPE {
  FETCHDATA_START = "FETCHDATA_START",
  FETCHDATA_END = "FETCHDATA_END",
}

export type LoadingAction = {
  type: LOADING_ACTION_TYPE;
};

export const fetchDataStart = (): LoadingAction => {
  return {
    type: LOADING_ACTION_TYPE.FETCHDATA_START,
  };
};

export const fetchDataEnd = (): LoadingAction => {
  return {
    type: LOADING_ACTION_TYPE.FETCHDATA_END,
  };
};
