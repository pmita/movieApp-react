/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useCallback} from 'react';
import style from './style.module.scss';

const MovieDetails = ({movie, toggleMovieDetails, setToggleMovieDetails}) => {

	// EVENT HANDLERS
	const closeMovieDetails = useCallback(() => setToggleMovieDetails(!toggleMovieDetails), [toggleMovieDetails, setToggleMovieDetails]);

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
				onClick={closeMovieDetails}
			>  
				Close
			</button>
		</div>
	</div>
    );
}

export default MovieDetails;
