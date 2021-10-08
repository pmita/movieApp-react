import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { showMovieDetails, editMovieDetails, removeMovie } from '../../store/actions/actionCreators';

const MovieItem = ({
	name,
	date,
	category,
	img,
	id
}) => {
	const dispatch = useDispatch();

	const showMovieDetailsHandler = () => dispatch(showMovieDetails(id));
	const editMovieHandler = () => dispatch(editMovieDetails(id));
	const removeMovieHandler = () => dispatch(removeMovie(id));
	// const showMovieBannerHandler = () => dispatch(showMovieDetails(id));
	
	return(
		<div className='movieItem-section'>
			<img src={img} alt='random text' onClick={showMovieDetailsHandler}/>
			<ul className='movieItem-details'>
				<h4>{name}</h4>
				<h4>{date}</h4>
			</ul>
			<span className='movieItem-category'>{category}</span>
			<div className='movieItem-buttons'>
				<button className='btn btn-editItem' onClick={editMovieHandler}>Edit</button>
				<button className='btn btn-removeItem' onClick={removeMovieHandler} >Remove</button>
			</div>
		</div>
	);
}

export default MovieItem;

