import {
  GET_TECHS,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
  ADD_TECH,
} from "../actions/ActionTypes";
const initialState = {
  techs: [],
  loading: false,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [action.payload, ...state.techs],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case TECHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
