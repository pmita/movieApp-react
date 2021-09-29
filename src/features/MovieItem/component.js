import React from 'react';
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
	return(
		<div className='movieItem-section'>
			<img src={img} alt='random text' onClick={() => showMovieDetailsHandler(id)}/>
			<ul className='movieItem-details'>
				<h4>{name}</h4>
				<h4>{date}</h4>
			</ul>
			<span className='movieItem-category'>{category}</span>
			<div className='movieItem-buttons'>
				<button className='btn btn-editItem' onClick={() => editMovieHandler(id)}>Edit</button>
				<button className='btn btn-removeItem' onClick={() => removeMovie(id)} >Remove</button>
			</div>
		</div>
	);
}

export default MovieItem;

