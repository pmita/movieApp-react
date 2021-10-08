/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import {
    ADD_MOVIE_BUTTON, SHOW_MOVIE_DETAILS, CANCEL_SHOW_MOVIE_DETAILS, 
    CANCEL_ADD_MOVIE,RESET_MOVIE_DETAILS, SUBMIT_MOVIE, UPDATE_MOVIE_DETAILS, EDIT_MOVIE,
    REMOVE_MOVIE, CHANGE_FILTER,CHANGE_CATEGORY
 } from "../actions/actionTypes";
import { mockData } from "../../assets/data/MockData"; // import assets
import { filterArray } from "../../assets/functions/util";
import { v4 as uuidv4 } from 'uuid';
// reducers

const initialState = {
    isHidden : true,
    showMovie : false,
    movies : mockData,
    moviesToShow : mockData,
    movie : {
        name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''
    },
    categories : [
        { name: 'ALL', active: true },
        { name: 'DOCUMENTARY', active: false },
        { name: 'COMEDY', active: false },
        { name: 'HORROR', active: false },
        { name: 'ACTION', active: false }
    ],
    filter : 'RELEASE DATE'
}

const moviesReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_MOVIE_BUTTON: // <----------This works
            return {...state, isHidden : !state.isHidden};
            case CANCEL_ADD_MOVIE: // <-----------This works
            return {...state, isHidden : !state.isHidden, movie : {name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''}};
        case RESET_MOVIE_DETAILS: // <-----------This works
            return {...state, movie : {name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''}};
        case SUBMIT_MOVIE: // <------------------This works
            const submitMovieEvent = action.payload;
            submitMovieEvent.preventDefault();
            return {...state, isHidden : !state.isHidden, moviesToShow : [...state.moviesToShow, {...state.movie, id : uuidv4()}]};
        case SHOW_MOVIE_DETAILS:
            const movieUpdated = state.moviesToShow.slice().filter((item) => item.id === action.payload);
            return {...state, showMovie : !state.showMovie, movie : movieUpdated[0]};
        case CANCEL_SHOW_MOVIE_DETAILS:
            return {...state, showMovie : !state.showMovie};
        case UPDATE_MOVIE_DETAILS: // <-----------This works
            const event = action.payload
            const formValue = state.movie;
            formValue[event.target.name] = event.target.value;
            return {...state, movie : {...state.movie, formValue}};
        case EDIT_MOVIE: // <--------------This works
            const movieAfterEdit = state.moviesToShow.slice().filter((item) => item.id === action.payload);
            return {...state, isHidden : !state.isHidden, movie : movieAfterEdit[0]};
        case REMOVE_MOVIE: // <-----------This works
            const moviesToShowAfterRemove = state.moviesToShow.slice().filter((item) => item.id !== action.payload);
            return {...state, moviesToShow : moviesToShowAfterRemove};
        case CHANGE_FILTER: // <--------------This works
            const filterEvent = action.payload;
            const filterValue = filterEvent.target.value;
            const arrToFilter = state.moviesToShow;
            const moviesToShowAfterFilter = filterArray(filterValue, arrToFilter);
            return {...state, filter : filterValue, moviesToShow: moviesToShowAfterFilter};
        case CHANGE_CATEGORY: // <-------------This works
            const categoriesUpdated = state.categories.map((item) => {
                if(item.name === action.payload){
                    return {...item, active : true};
                } else {
                    return {...item, active : false};
                }
            });

            if(action.payload !== 'ALL'){
                const moviesToShowUpdated = state.movies.slice().filter((item) => (
                    item.category.toUpperCase().includes(action.payload)
                ));
                return {
                    ...state, 
                    moviesToShow: moviesToShowUpdated ,
                    categories : categoriesUpdated
                };
            } else {
                return {
                    ...state, 
                    moviesToShow: state.movies,
                    categories : categoriesUpdated
                }
            }
        default:
            return state;
    };
};

export default moviesReducer;
