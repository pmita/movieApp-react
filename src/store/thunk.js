// ACTIONS 
import { LOAD_MOVIES, LOAD_MOVIES_BY_GENRE } from "./actions/actionTypes";
// API LINKS
import { moviesLink, moviesByGenreLink } from "./apiLinks";

export const loadMovies = () => async (dispatch) => {
    const apiLink = moviesLink();
    const apiData = await fetch(apiLink);
    const moviesData = await apiData.json()
    dispatch({
        type : LOAD_MOVIES,
        payload : moviesData.data
    });
};

export const loadMoviesByGenre = (genre) => async (dispatch) => {
    // FETCH
    const apiLink = moviesByGenreLink(genre);
    const apiData = await fetch(apiLink);
    const moviesData = await apiData.json();
    dispatch({
        type : LOAD_MOVIES_BY_GENRE,
        payload : moviesData.data
    });
};
