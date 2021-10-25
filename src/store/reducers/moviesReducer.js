/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import {
    LOAD_MOVIES, ADD_MOVIE_BUTTON, SHOW_MOVIE_DETAILS, CANCEL_SHOW_MOVIE_DETAILS, 
    CANCEL_ADD_MOVIE,RESET_MOVIE_DETAILS, SUBMIT_MOVIE, UPDATE_MOVIE_DETAILS, EDIT_MOVIE,
    REMOVE_MOVIE, CHANGE_FILTER, LOAD_CATEGORES, CHANGE_CATEGORY } from "../actions/actionTypes";
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
    genres : [],
    filter : 'RELEASE DATE',
}

const moviesReducer = (state=initialState, action) => {
    const {isHidden, showMovie, movies, moviesToShow, movie, genres} = state;

    switch(action.type){
        case LOAD_MOVIES:
            return {...state, movies : action.payload, moviesToShow : action.payload};
        case ADD_MOVIE_BUTTON: 
            return {...state, isHidden : !isHidden};
            case CANCEL_ADD_MOVIE:
            return {...state, isHidden : !isHidden, movie : {name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''}};
        case RESET_MOVIE_DETAILS: 
            return {...state, movie : {name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''}};
        case SUBMIT_MOVIE:
            const submitMovieEvent = action.payload;
            submitMovieEvent.preventDefault();
            return {...state, isHidden : !isHidden, moviesToShow : [...moviesToShow, {...movie, id : uuidv4()}]};
        case SHOW_MOVIE_DETAILS:
            const movieUpdated = moviesToShow.slice().filter((item) => item.id === action.payload);
            return {...state, showMovie : !showMovie, movie : movieUpdated[0]};
        case CANCEL_SHOW_MOVIE_DETAILS:
            return {...state, showMovie : !showMovie};
        case UPDATE_MOVIE_DETAILS:
            const event = action.payload
            const formValue = state.movie;
            formValue[event.target.name] = event.target.value;
            return {...state, movie : {...movie, formValue}};
        case EDIT_MOVIE: 
            const movieAfterEdit = moviesToShow.slice().filter((item) => item.id === action.payload);
            return {...state, isHidden : !isHidden, movie : movieAfterEdit[0]};
        case REMOVE_MOVIE:
            const moviesToShowAfterRemove = moviesToShow.slice().filter((item) => item.id !== action.payload);
            return {...state, moviesToShow : moviesToShowAfterRemove};
        case CHANGE_FILTER:
            const filterEvent = action.payload;
            const filterValue = filterEvent.target.value;
            const arrToFilter = state.moviesToShow;
            const moviesToShowAfterFilter = filterArray(filterValue, arrToFilter);
            return {...state, filter : filterValue, moviesToShow: moviesToShowAfterFilter};
        case LOAD_CATEGORES:
            return {...state, genres : action.payload}
        case CHANGE_CATEGORY:
            const genresUpdated = genres.map((item) => {
                if(item.name.toUpperCase() === action.payload.toUpperCase()){
                    return {...item, active : true};
                } else {
                    return {...item, active : false};
                }
            });

            if(action.payload !== 'All'){
                const moviesToShowUpdated = movies.slice().filter((item) => (
                    item.genres.some((genreItem) => genreItem.includes(action.payload))
                ));
                return {...state, moviesToShow: moviesToShowUpdated , genres : genresUpdated};
            } else {
                return {...state, moviesToShow: movies, genres : genresUpdated};
            }
        default:
            return state;
    };
};

export default moviesReducer;
