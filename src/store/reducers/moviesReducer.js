/* eslint-disable no-case-declarations */
import {
    LOAD_MOVIES, LOAD_MOVIES_BY_GENRE, SUBMIT_MOVIE,
    REMOVE_MOVIE, CHANGE_FILTER } from "../actions/actionTypes";
 import { v4 as uuidv4 } from 'uuid';
 // ASSETS
import { filterArray } from "../../assets/functions/util";

const initialState = {
    movies : [],
    filter : 'RELEASE DATE',
}

const moviesReducer = (state = initialState, action) => {
    const {movies} = state;
    switch(action.type){
        case LOAD_MOVIES:
        case LOAD_MOVIES_BY_GENRE:
            return {...state, movies : action.payload};
        case SUBMIT_MOVIE:
            return {...state, movies : [...movies, {...action.payload, id : uuidv4()}]};
        case REMOVE_MOVIE:
            const moviesUpdated = movies.slice().filter((item) => item.id !== action.payload);
            return {...state, movies : moviesUpdated};
        case CHANGE_FILTER:
            const filterValue = action.payload;
            const arrToFilter = state.movies;
            const moviesToShowAfterFilter = filterArray(filterValue, arrToFilter);
            return {...state, filter : filterValue, movies: moviesToShowAfterFilter};
        default:
            return state;
    };
};

export default moviesReducer;
