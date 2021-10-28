/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import {
    LOAD_MOVIES, LOAD_MOVIES_BY_GENRE, ADD_MOVIE_BUTTON, SHOW_MOVIE_DETAILS, CANCEL_SHOW_MOVIE_DETAILS, 
    CANCEL_ADD_MOVIE,RESET_MOVIE_DETAILS, SUBMIT_MOVIE,
    REMOVE_MOVIE, CHANGE_FILTER } from "../actions/actionTypes";
 import { v4 as uuidv4 } from 'uuid';
 // ASSETS
import { filterArray } from "../../assets/functions/util";

const initialState = {
    isHidden : true,
    showMovie : false,
    movies : [],
    moviesToShow : [],
    movie : {
        title : '', release_date : '', genres : '', vote_average : '', poster_path : '', overview : '', id : ''
    },
    filter : 'RELEASE DATE',
}

const moviesReducer = (state=initialState, action) => {
    // eslint-disable-next-line no-unused-vars
    const {isHidden, showMovie, movies, moviesToShow, movie} = state;

    switch(action.type){
        case LOAD_MOVIES:
            return {...state, movies : action.payload, moviesToShow : action.payload};
        case LOAD_MOVIES_BY_GENRE:
            return {...state, movies : action.payload, moviesToShow : action.payload};
        case ADD_MOVIE_BUTTON: 
            return {...state, isHidden : !isHidden};
        case CANCEL_ADD_MOVIE:
            return {...state, isHidden : !isHidden, movie : {name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''}};
        case RESET_MOVIE_DETAILS: 
            return {...state, movie : {name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''}};
        case SUBMIT_MOVIE:
            return {...state, movies : [...movies, {...action.payload, id : uuidv4()}]};
        case SHOW_MOVIE_DETAILS:
            const movieUpdated = moviesToShow.slice().filter((item) => item.id === action.payload);
            return {...state, showMovie : !showMovie, movie : movieUpdated[0]};
        case CANCEL_SHOW_MOVIE_DETAILS:
            return {...state, showMovie : !showMovie};
        case REMOVE_MOVIE:
            const moviesToShowAfterRemove = moviesToShow.slice().filter((item) => item.id !== action.payload);
            return {...state, moviesToShow : moviesToShowAfterRemove};
        case CHANGE_FILTER:
            const filterEvent = action.payload;
            const filterValue = filterEvent.target.value;
            const arrToFilter = state.moviesToShow;
            const moviesToShowAfterFilter = filterArray(filterValue, arrToFilter);
            return {...state, filter : filterValue, moviesToShow: moviesToShowAfterFilter};
        default:
            return state;
    };
};

export default moviesReducer;
