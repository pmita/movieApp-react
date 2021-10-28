/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import {
    LOAD_MOVIES, LOAD_MOVIES_BY_GENRE, SHOW_MOVIE_DETAILS, 
    CANCEL_SHOW_MOVIE_DETAILS, SUBMIT_MOVIE,
    REMOVE_MOVIE, CHANGE_FILTER } from "../actions/actionTypes";
 import { v4 as uuidv4 } from 'uuid';
 // ASSETS
import { filterArray } from "../../assets/functions/util";

const initialState = {
    showMovie : false,
    movies : [],
    filter : 'RELEASE DATE',
}

const moviesReducer = (state = initialState, action) => {
    // eslint-disable-next-line no-unused-vars
    const {showMovie, movies} = state;

    switch(action.type){
        case LOAD_MOVIES:
            return {...state, movies : action.payload};
        case LOAD_MOVIES_BY_GENRE:
            return {...state, movies : action.payload};
        case SUBMIT_MOVIE:
            return {...state, movies : [...movies, {...action.payload, id : uuidv4()}]};
        case SHOW_MOVIE_DETAILS:
            const movieUpdated = movies.slice().filter((item) => item.id === action.payload);
            return {...state, showMovie : !showMovie, movie : movieUpdated[0]};
        case CANCEL_SHOW_MOVIE_DETAILS:
            return {...state, showMovie : !showMovie};
        case REMOVE_MOVIE:
            const moviesUpdated = movies.slice().filter((item) => item.id !== action.payload);
            return {...state, movies : moviesUpdated};
        case CHANGE_FILTER:
            const filterEvent = action.payload;
            const filterValue = filterEvent.target.value;
            const arrToFilter = state.movies;
            const moviesToShowAfterFilter = filterArray(filterValue, arrToFilter);
            return {...state, filter : filterValue, movies: moviesToShowAfterFilter};
        default:
            return state;
    };
};

export default moviesReducer;
