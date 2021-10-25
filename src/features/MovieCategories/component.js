/* eslint-disable max-len */
import React, { useCallback, useEffect } from 'react';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { loadCategories,changeCategory } from '../../store/actions/actionCreators';

const MovieCategories = () => {
	// REDUX
	const movies = useSelector((state) => state.movieApp.movies);
	const genres = useSelector((state) => state.movieApp.genres);
	const dispatch = useDispatch();

	// EVENT HANDLERS
	const changeCategoryHandler = useCallback((e) => dispatch(changeCategory(e)), [dispatch, changeCategory]);

	// useEFFECT
	useEffect(() => {
		const genres = reduceGenres(movies);
		dispatch(loadCategories(genres));
	}, [movies]);

	// FUNCTIONS
	const reduceGenres = (movies) => {
		const allGenres = movies.map((movie) => movie.genres);
		const allGenresFlattened = [].concat(...allGenres);
		const genres = ['All', ...new Set(allGenresFlattened)];
		const reduxGenres = genres.map((genre) => {
			return ({ name : genre, active : false});
		})
		return reduxGenres;
	}
	
	return(
		<aside className='movieSection-categories'>
			<ul className='category-items'>
				{genres && genres.map((item, index) => (
					<h4 
						key={index} 
						className={item.active ? 'category-item active' : 'category-item'}
						onClick={changeCategoryHandler}
					>
						{item.name}
					</h4>
            ))}
			</ul>
		</aside>
	);
}

export default MovieCategories;
