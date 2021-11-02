import React, { useState, useCallback } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { loadMoviesByGenre, loadMovies } from '../../store/thunk';

const MovieCategories = () => {
	// REDUX & STATE
	const dispatch = useDispatch();
	const [categories, setCategories] = useState([
		{name: 'All', active : true},
		{name: 'Drama', active : false},
		{name: 'Romance', active : false},
		{name: 'Animation', active : false},
		{name: 'Adventure', active : false},
		{name: 'Family', active : false},
		{name: 'Comedy', active : false}
	])

	// EVENT HANDLERS
	const changeCategoryCallback = useCallback((categoryValue) => {
		const categoriesUpdated = categories.map((item) => {
			if(item.name.toUpperCase() === categoryValue.toUpperCase()){
				return {...item, active : true};
			} else {
				return {...item, active : false};
			}
		});
		// update the categories array
		setCategories(categoriesUpdated);
		
		if(categoryValue !== 'All'){
			dispatch(loadMoviesByGenre(categoryValue));
		} else {
			dispatch(loadMovies());
		}
	}, [dispatch, categories]);
	return(
		<aside className='movieSection-categories'>
			<ul className='category-items'>
				{categories.map((item) => (
					<h4 
						key={item.name} 
						className={item.active ? 'category-item active' : 'category-item'}
						onClick={() => changeCategoryCallback(item.name)}
					>
						{item.name}
					</h4>
            ))}
			</ul>
		</aside>
	);
}

export default MovieCategories;
