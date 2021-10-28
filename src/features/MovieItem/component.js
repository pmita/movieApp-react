/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import './style.scss';
// REDUX
import { useDispatch } from 'react-redux';
import { showMovieDetails, removeMovie } from '../../store/actions/actionCreators';
// COMPONENTS
import EditMovie from '../../shared/EditMovie';

const MovieItem = ({ movie, id }) => {
	// REDUX & STATE
	const [isHidden, setIsHidden] = useState(true);
	const dispatch = useDispatch();

	// EVENT HANDLERS
	const showMovieDetailsHandler = useCallback(() => dispatch(showMovieDetails(id)), [dispatch, showMovieDetails, id]);
	const removeMovieHandler = useCallback(() => dispatch(removeMovie(id)), [dispatch, removeMovie, id]);
	const editMovieDetailsHandler = useCallback(() => setIsHidden(!isHidden), [isHidden, setIsHidden]);
	
	return(
		<>
			<div className='movieItem-section'>
				<img src={movie.poster_path} alt='random text' onClick={showMovieDetailsHandler}/>
				<ul className='movieItem-details'>
					<h4>{movie.title}</h4>
					<h4>{movie.release_date}</h4>
				</ul>
			
				{movie.genres && movie.genres.map((item, index) => {
				return(
					<span key={index} className='movieItem-category'>{item} </span>
				);
			})}
				<div className='movieItem-buttons'>
					<button className='btn btn-editItem' onClick={editMovieDetailsHandler}>Edit</button>
					<button className='btn btn-removeItem' onClick={removeMovieHandler} >Remove</button>
				</div>
			</div>
			{!isHidden &&
				<EditMovie
					movie={movie}
					id={id}
					isHidden={isHidden}
					setIsHidden={setIsHidden}
				/>
		}
		</>
	);
}

export default MovieItem;

