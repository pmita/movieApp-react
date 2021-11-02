/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useEffect, useCallback } from 'react';
import './style.scss';
// REDUX
import { useDispatch } from 'react-redux';
import { submitMovie } from '../../store/actions/actionCreators';

const EditMovie = ({movie, id, isHidden, setIsHidden}) => {
	// REDUX AND STATE
	const [movieDetails, setMovieDetails] = useState({title : '', release_date : '', genres : '', vote_average : '', poster_path : '', overview : '', id : ''});
	const dispatch = useDispatch();

	// useEFFECT
	useEffect(() => {
		setMovieDetails({title : movie.title, release_date : movie.release_date, genres : movie.genres, vote_average : movie.vote_average, poster_path : movie.poster_path, overview : movie.overview, id : movie.id,});
	}, [])

	// EFFECT HANDLERS
	const updateMovieDetailsHandler = useCallback((e) => {
		console.log(id);
		const formValue = movieDetails;
		formValue[e.target.name] = e.target.value;
		setMovieDetails({...movieDetails, formValue});
	}, [movieDetails, setMovieDetails]);
	const resetMovieDetailsHandler = useCallback(() => setMovieDetails({ ...movieDetails, title : '', release_date : '', genres : '', vote_average : '', poster_path : '', overview : '', id : ''}), [movieDetails, setMovieDetails]);
	const cancelEditMovieHandler = useCallback(() => {
		setIsHidden(!isHidden);
		resetMovieDetailsHandler();
	}, [isHidden, setIsHidden, resetMovieDetailsHandler]);
	const submitMovieHandler = useCallback((event) => {
		event.preventDefault();
		dispatch(submitMovie(movieDetails));
		setIsHidden(!isHidden);
	}, [dispatch, movieDetails, isHidden, setIsHidden]);

	
	return(
		<div className='addMovie-section'>
			<div className='addMovie-details'>
				<h2>EDIT MOVIE</h2>
				<form onSubmit={submitMovieHandler}>
					<label>
						TITLE
						<input type='text' name='title' value={movieDetails.title} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						RELEASE DATE
						<input type='date' name='release_date' value={movieDetails.release_date} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						MOVIE URL
						<input type='text' name='poster_path' value={movieDetails.poster_path} onChange={updateMovieDetailsHandler} required/>
					</label>
					{movieDetails.genres
						?<label>
							GENRE
							<input type='text' name='genres' value={movieDetails.genres[0]} onChange={updateMovieDetailsHandler} required/>
						</label>
						:<label>
							GENRE
							<input type='text' name='genres' value={movieDetails.genres} onChange={updateMovieDetailsHandler} required/>
						</label>
					}
					<label>
						OVERVIEW
						<input type='textarea' name='overview' value={movieDetails.overview} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						RATING
						<input type='number' name='vote_average' value={movieDetails.vote_average} onChange={updateMovieDetailsHandler} required/>
					</label>
					<div className='addMovie-buttons'>
						<button className='btn btn-cancelItem' onClick={cancelEditMovieHandler}>CANCEL</button>
						<button className='btn btn-resetItem'onClick={resetMovieDetailsHandler}>RESET</button>
						<button type='submit' className='btn btn-addItem'>SUBMIT</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditMovie;
