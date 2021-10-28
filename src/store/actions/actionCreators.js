import { 
    LOAD_MOVIES, LOAD_MOVIES_BY_GENRE, ADD_MOVIE_BUTTON, SHOW_MOVIE_DETAILS, 
    CANCEL_SHOW_MOVIE_DETAILS, CANCEL_ADD_MOVIE,RESET_MOVIE_DETAILS, SUBMIT_MOVIE, 
    UPDATE_MOVIE_DETAILS, EDIT_MOVIE, REMOVE_MOVIE, CHANGE_FILTER } from "./actionTypes";

// MOVIE RELATED ACTIONS.
export const loadMovies = () => async (dispatch) => {
    // FETCH DATA
    const apiData = await fetch('http://localhost:4000/movies?limit=10');
    const moviesData = await apiData.json()
    dispatch({
        type : LOAD_MOVIES,
        payload : moviesData.data
    });
};

export const loadMoviesByGenre = (genre) => async (dispatch) => {
    // FETCH
    const apiData = await fetch(`http://localhost:4000/movies?sortOrder=desc&filter=${genre}&limit=10`);
    const moviesData = await apiData.json();
    dispatch({
        type : LOAD_MOVIES_BY_GENRE,
        payload : moviesData.data
    });
};
export const addMovie = () => {
    return {
        type: ADD_MOVIE_BUTTON
    }
}
export const showMovieDetails = (movieId) => {
    return {
        type : SHOW_MOVIE_DETAILS,
        payload : movieId
    };
};
export const cancelShowMovieDetails = () => {
    return {
        type : CANCEL_SHOW_MOVIE_DETAILS
    };
};
export const cancelAddMovie = () => {
    return {
        type : CANCEL_ADD_MOVIE
    };
};
export const resetMovieDetails = () => {
    return {
        type : RESET_MOVIE_DETAILS
    };
};
export const submitMovie = (movieItem) => {
    return {
        type : SUBMIT_MOVIE,
        payload : movieItem
    };
};
export const updateMovieDetails = (event) => {
    return { 
        type : UPDATE_MOVIE_DETAILS,
        payload : event
    };
};
export const editMovieDetails = (movieId) => {
    return {
        type : EDIT_MOVIE,
        payload : movieId
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
export const changeFilters = (event) => {
    return {
        type : CHANGE_FILTER,
        payload : event
    };
};
// END OF FILTERING ACTIONS

