// This file will be our root reducers, so we bring in other reducers with combine reducer 
import {combineReducers} from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer"

// export an object with all the reducers that we have key is the slice of the state, value is the reducer
export default combineReducers({
    log: logReducer,
    tech: techReducer
});