/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useCallback} from 'react';
import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { cancelShowMovieDetails } from '../../store/actions/actionCreators';

const MovieDetails = () => {
	// REDUX
	const movie = useSelector((state) => state.movieApp.movie);
	const dispatch = useDispatch();

	// EVENT HANDLERS
	const closeMovieDetailsHandler = useCallback(() => dispatch(cancelShowMovieDetails()), [dispatch, cancelShowMovieDetails]);
	
    return(
	<div className={style.movieDetails_section}>
		<img src={movie.poster_path} alt='Details about chosen movie' />
		<div className={style.movieDetails_content}>
			<h2>{movie.title}</h2>
			{movie.genres.map((item, index) => {
				return(
					<p key={index}>{item} </p>
				);
			})}
			<ul className={style.movieDetails_info}>
				<h4>{movie.release_date}</h4>
				<h4>{movie.vote_average}</h4>
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
