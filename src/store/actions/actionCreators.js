import { 
    LOAD_MOVIES, LOAD_MOVIES_BY_GENRE, SUBMIT_MOVIE, 
    REMOVE_MOVIE, CHANGE_FILTER } from "./actionTypes";

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
export const changeFilters = (event) => {
    return {
        type : CHANGE_FILTER,
        payload : event
    };
};
// END OF FILTERING ACTIONS

