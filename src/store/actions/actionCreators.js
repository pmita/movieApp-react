import { SUBMIT_MOVIE, REMOVE_MOVIE, CHANGE_FILTER } from "./actionTypes";

// MOVIE RELATED ACTIONS
export const submitMovie = (movieItem) => {
    return {
        type : SUBMIT_MOVIE,
        payload : movieItem
    };
};
export const removeMovie = (movieId) => {
    return {
        type : REMOVE_MOVIE,
        payload : movieId
    };
};
// END OF MOVIE BASED ACTIONS

// FILTERING ACTIONS
export const changeFilters = (filter) => {
    return {
        type : CHANGE_FILTER,
        payload : filter
    };
};
// END OF FILTERING ACTIONS

