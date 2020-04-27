import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./ActionTypes";

export const getLogs = () => {
  // reduxt thunk gives us the ability to retun a function
  return async (dispatch) => {
    setLoading();
    try {
      const logs = await fetch("/logs");
      const logData = await logs.json();
      dispatch({ type: GET_LOGS, payload: logData });
    } catch (error) {
      dispatch({ type: LOGS_ERROR, payload: error.response.data });
    }
  };
};
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
