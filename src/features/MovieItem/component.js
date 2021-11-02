/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import './style.scss';
// REDUX
import { useDispatch } from 'react-redux';
import { removeMovie } from '../../store/actions/actionCreators';
// COMPONENTS
import EditMovie from '../../shared/EditMovie';
import MovieDetails from '../MovieDetails/component';

const MovieItem = ({ movie, id }) => {
	// REDUX & STATE
	const [isHidden, setIsHidden] = useState(true);
	const [toggleMovieDetails, setToggleMovieDetails] = useState(false);
	const dispatch = useDispatch();

	// EVENT HANDLERS
	// const showMovieDetailsHandler = useCallback(() => dispatch(showMovieDetails(id)), [dispatch, showMovieDetails, id]);
	const removeMovieHandler = useCallback(() => dispatch(removeMovie(id)), [dispatch, removeMovie, id]);
	const editMovieDetailsHandler = useCallback(() => setIsHidden(!isHidden), [isHidden, setIsHidden]);
	const showMovieDetailsHanlderVol2 = () => setToggleMovieDetails(!toggleMovieDetails);
	return(
		<>
			<div className='movieItem-section'>
				<img src={movie.poster_path} alt='random text' onClick={showMovieDetailsHanlderVol2}/>
				<ul className='movieItem-details'>
					<h4>{movie.title}</h4>
					<h4>{movie.release_date}</h4>
				</ul>
			
				{movie.genres && movie.genres.map((item, index) => <span key={index} className='movieItem-category'>{item} </span>)}
				
				<div className='movieItem-buttons'>
					<button className='btn btn-editItem' onClick={editMovieDetailsHandler}>Edit</button>
					<button className='btn btn-removeItem' onClick={removeMovieHandler} >Remove</button>
				</div>
			</div>
			{!isHidden &&
				<EditMovie
					movie={movie}
					isHidden={isHidden}
					setIsHidden={setIsHidden}
				/>
			}
			{toggleMovieDetails &&
				<MovieDetails 
					movie={movie}
					id={id}
					toggleMovieDetails={toggleMovieDetails}
					setToggleMovieDetails={setToggleMovieDetails}
				/>
			}
		</>
	);
}

export default MovieItem;

