import {
  GET_TECHS,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
  ADD_TECH,
} from "./ActionTypes";

// Get techs from the server
export const getTechs = () => {
  // reduxt thunk gives us the ability to retun a function
  return async (dispatch) => {
    setLoading();
    try {
      const techs = await fetch("/techs");
      const techData = await techs.json();
      dispatch({ type: GET_TECHS, payload: techData });
    } catch (error) {
      dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
    }
  };
};

export const addTech = (tech) => {
    return async (dispatch) => {
      setLoading();
      try {
        const techs = await fetch("/techs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tech),
        });
        const techData = await techs.json();
        dispatch({ type: ADD_TECH, payload: techData });
      } catch (error) {
        dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
      }
    };
  };
  
  export const deleteTech = (id) => {
    return async (dispatch) => {
      setLoading();
      try {
        const tech = await fetch(`/techs/${id}`, {
          method: "DELETE",
        });
        dispatch({ type: DELETE_TECH, payload: id });
      } catch (error) {
        dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
      }
    };
  };
// set loading

const setLoading = () => {
  return { ype: SET_LOADING };
};
