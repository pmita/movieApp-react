export const moviesLink = () => {
    return(`http://localhost:4000/movies?sortOrder=asc`);
}

export const moviesByGenreLink = (genre) => {
    return (`http://localhost:4000/movies?sortOrder=desc&filter=${genre}&limit=10`)
}
