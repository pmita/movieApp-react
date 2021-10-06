import React, { useCallback } from 'react';
import './style.scss';

const MovieItem = ({
	name,
	date,
	category,
	img,
	id,
	editMovieHandler,
	removeMovie,
	showMovieDetailsHandler
}) => {
	// prevent unneccesary duplication with useCallback hook
	const showMovieDetailsCallback = useCallback(() => showMovieDetailsHandler(id), []);
	const editMovieCallback = useCallback(() => editMovieHandler(id), []);
	const removeMovieCallback = useCallback(() => removeMovie(id), []);
	
	return(
		<div className='movieItem-section'>
			<img src={img} alt='random text' onClick={showMovieDetailsCallback}/>
			<ul className='movieItem-details'>
				<h4>{name}</h4>
				<h4>{date}</h4>
			</ul>
			<span className='movieItem-category'>{category}</span>
			<div className='movieItem-buttons'>
				<button className='btn btn-editItem' onClick={editMovieCallback}>Edit</button>
				<button className='btn btn-removeItem' onClick={removeMovieCallback} >Remove</button>
			</div>
		</div>
	);
}

export default MovieItem;

