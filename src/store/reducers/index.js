import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

const allReducers = combineReducers({
    movieApp : moviesReducer,
});

export default allReducers;
