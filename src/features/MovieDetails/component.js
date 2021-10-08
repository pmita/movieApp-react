/* eslint-disable no-unused-vars */
import React, {useCallback} from 'react';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { cancelShowMovieDetails } from '../../store/actions/actionCreators';

const MovieDetails = () => {
	const movie = useSelector((state) => state.movieApp.movie);
	const dispatch = useDispatch();

	const closeMovieDetailsHandler = () => dispatch(cancelShowMovieDetails());
	
    return(
	<div className={style.movieDetails_section}>
		<img src={movie.img} alt='Details about chosen movie' />
		<div className={style.movieDetails_content}>
			<h2>{movie.name}</h2>
			<p>{movie.category}</p>
			<ul className={style.movieDetails_info}>
				<h4>{movie.date}</h4>
				<h4>{movie.rating}</h4>
			</ul>
			<p>{movie.overview}</p>
			<button 
				className={style.btn}
				onClick={closeMovieDetailsHandler}
			>  
				Close
			</button>
		</div>
	</div>
    );
}

export default MovieDetails;
