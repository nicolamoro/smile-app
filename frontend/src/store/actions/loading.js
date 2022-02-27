export const FETCHDATA_START = "FETCHDATA_START";
export const FETCHDATA_END = "FETCHDATA_END";

export const fetchDataStart = () => {
  return {
    type: FETCHDATA_START,
  };
};

export const fetchDataEnd = () => {
  return {
    type: FETCHDATA_END,
  };
};
