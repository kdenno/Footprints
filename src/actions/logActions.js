import {
  GET_LOGS,
  SET_LOADING,
  ADD_LOG,
  LOGS_ERROR,
  DELETE_LOG,
  UPDATE_LOG,
  CLEAR_CURRENT,
  SET_CURRENT,
} from "./ActionTypes";

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
export const addLog = (log) => {
  return async (dispatch) => {
    setLoading();
    try {
      const logs = await fetch("/logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(log),
      });
      const logData = await logs.json();
      dispatch({ type: ADD_LOG, payload: logData });
    } catch (error) {
      dispatch({ type: LOGS_ERROR, payload: error.response.data });
    }
  };
};

export const deleteLog = (id) => {
  return async (dispatch) => {
    setLoading();
    try {
      const log = await fetch(`/logs/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: DELETE_LOG, payload: id });
    } catch (error) {
      dispatch({ type: LOGS_ERROR, payload: error.response.data });
    }
  };
};

export const updateLog = (log) => {
  return async (dispatch) => {
    setLoading();
    try {
      const updatedlog = await fetch(`/logs/${log.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(log),
      });
      const logData = await updatedlog.json();
      dispatch({ type: UPDATE_LOG, payload: logData });
    } catch (error) {
      dispatch({ type: LOGS_ERROR, payload: error.response.data });
    }
  };
};
export const setCurrent = (log) => {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT, payload: log });
  };
};
export const clearCurrent = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_CURRENT });
  };
};
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
