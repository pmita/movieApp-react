/* eslint-disable max-len */
import React, { useCallback } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { showMovieDetails, editMovieDetails, removeMovie } from '../../store/actions/actionCreators';

const MovieItem = ({ movie, id }) => {
	// REDUX
	const dispatch = useDispatch();

	// EVENT HANDLERS
	const showMovieDetailsHandler = useCallback(() => dispatch(showMovieDetails(id)), [dispatch, showMovieDetails, id]);
	const editMovieHandler = useCallback(() => dispatch(editMovieDetails(id)), [dispatch, editMovieDetails, id]);
	const removeMovieHandler = useCallback(() => dispatch(removeMovie(id)), [dispatch, removeMovie, id]);
	
	return(
		<div className='movieItem-section'>
			<img src={movie.poster_path} alt='random text' onClick={showMovieDetailsHandler}/>
			<ul className='movieItem-details'>
				<h4>{movie.title}</h4>
				<h4>{movie.release_date}</h4>
			</ul>
			
			{movie.genres.map((item, index) => {
				return(
					<span key={index} className='movieItem-category'>{item} </span>
				);
			})}
			<div className='movieItem-buttons'>
				<button className='btn btn-editItem' onClick={editMovieHandler}>Edit</button>
				<button className='btn btn-removeItem' onClick={removeMovieHandler} >Remove</button>
			</div>
		</div>
	);
}

export default MovieItem;

