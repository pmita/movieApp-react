/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import {  submitMovie } from '../../store/actions/actionCreators';

const AddMovie = ({toggleAddMovie, setToggleAddMovie}) => {
	// REDUX AND STATE
	const [movieDetails, setMovieDetails] = useState({title : '', release_date : '', genre : '', vote_average : '', poster_path : '', overview : '', id : ''});
	const dispatch = useDispatch();

	// EVENT HANDLERS
	const updateDetailsHandler = (e) => {
		const formValue = movieDetails;
		formValue[e.target.name] = e.target.value;
		setMovieDetails({...movieDetails, formValue});
	} 
	const resetMovieDetailsHandler = useCallback(() => setMovieDetails({ ...movieDetails, title : '', release_date : '', genres : '', vote_average : '', poster_path : '', overview : '', id : ''}), [movieDetails, setMovieDetails]);
	const cancelEditMovieHandler = useCallback(() => {
		setToggleAddMovie(!toggleAddMovie);
		resetMovieDetailsHandler();
	}, [toggleAddMovie, setToggleAddMovie, resetMovieDetailsHandler]);
	const submitMovieDetailsHandler = useCallback((event) => {
		event.preventDefault();
		dispatch(submitMovie(movieDetails));
		setToggleAddMovie(!toggleAddMovie);
	}, [ dispatch, toggleAddMovie, setToggleAddMovie]);

	// VARIABLES
	 const setGenres = ['', 'Drama', 'Adventure', 'Crime', 'Comedy', 'Thriller'];
	
	return(
		<div className='addMovie-section'>
			<div className='addMovie-details'>
				<h2>ADD MOVIE</h2>
				<form onSubmit={submitMovieDetailsHandler}>
					<label>
						TITLE
						<input type='text' name='title' value={movieDetails.title} onChange={updateDetailsHandler} required/>
					</label>
					<label>
						RELEASE DATE
						<input type='text' name='release_date' value={movieDetails.release_date} onChange={updateDetailsHandler} required/>
					</label>
					<label>
						MOVIE URL
						<input type='text' name='poster_path' value={movieDetails.poster_path} onChange={updateDetailsHandler} required/>
					</label>
					<label>
						GENRE
					
						<select 
							type='select'
							name='genre'
							value={movieDetails.genre}
							onChange={updateDetailsHandler}
						>
							{setGenres.map((item, index) => {
								return(
									<option key={index} value={item}>{item}</option>
								);
							})}
						</select>
					</label>
					<label>
						OVERVIEW
						<input type='text' name='overview' value={movieDetails.overview} onChange={updateDetailsHandler} required/>
					</label>
					<label>
						OVERVIEW
						<input type='text' name='overview' value={movieDetails.overview} onChange={updateDetailsHandler} required/>
					</label>
					<label>
						RATING
						<input type='text' name='vote_average' value={movieDetails.vote_average} onChange={updateDetailsHandler} required/>
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

export default AddMovie;
