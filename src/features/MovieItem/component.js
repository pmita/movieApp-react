/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import './style.scss';
// REDUX
import { useDispatch } from 'react-redux';
import { removeMovie } from '../../store/actions/actionCreators';
// COMPONENTS
import { array } from 'prop-types';
import AddMovie from '../../shared/AddMovie/component';
// ROUTER
import { Link } from 'react-router-dom'

const MovieItem = ({ movie, id }) => {
	// REDUX & STATE
	const [isHidden, setIsHidden] = useState(true);
	const dispatch = useDispatch();

	// EVENT HANDLERS
	const removeMovieHandler = useCallback(() => dispatch(removeMovie(id)), [dispatch, removeMovie, id]);
	const editMovieDetailsHandler = useCallback(() => setIsHidden(!isHidden), [isHidden, setIsHidden]);

	return(
		<>
			<div className='movieItem-section'>
				<Link to={`/films/${id}`}>
					<img 
						src={movie.poster_path} 
						alt='random text' 
					/>
				</Link>

				<ul className='movieItem-details'>
					<h4>{movie.title}</h4>
					<h4>{movie.release_date}</h4>
				</ul>
			
				{typeof(movie.genres) === typeof(array) 
					?movie.genres.map((item, index) => <span key={index} className='movieItem-category'>{item} </span>)
					:<span>{movie.genres}</span>
				}
				
				<div className='movieItem-buttons'>
					<button 
						className='btn btn-editItem' 
						onClick={editMovieDetailsHandler}
					>
						Edit
					</button>
					<button 
						className='btn btn-removeItem' 
						onClick={removeMovieHandler} 
					>
						Remove
					</button>
				</div>
			</div>

			{!isHidden &&
				<AddMovie
					movie={movie}
					toggleAddMovie={isHidden}
					setToggleAddMovie={setIsHidden}
				/>
			}
		</>
	);
}

export default MovieItem;

