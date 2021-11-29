import { useSelector } from "react-redux";

export const moviesSelector = useSelector((store) => store.movies);
export const movieFiltersSelector = useSelector((store) => store.filters);

