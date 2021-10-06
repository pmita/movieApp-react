/* eslint-disable no-unused-vars */
import React, {useCallback} from 'react';
import style from './style.module.scss';

const MovieDetails = ({
    showMovie,
	setShowMovie,
	movieDetails
}) => {
    // define our event handlers
    const closeMovieDetailsHandler = useCallback(() => {
		setShowMovie((prevShowMovie) => !prevShowMovie);
    }, [showMovie, setShowMovie]);
	
    return(
	<div className={style.movieDetails_section}>
		<img src={movieDetails.img} alt='Details about chosen movie' />
		<div className={style.movieDetails_content}>
			<h2>{movieDetails.name}</h2>
			<p>{movieDetails.category}</p>
			<ul className={style.movieDetails_info}>
				<h4>{movieDetails.date}</h4>
				<h4>{movieDetails.rating}</h4>
			</ul>
			<p>{movieDetails.overview}</p>
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
