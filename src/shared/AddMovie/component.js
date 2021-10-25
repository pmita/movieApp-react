/* eslint-disable max-len */
import React, { useCallback } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { cancelAddMovie, resetMovieDetails, submitMovie, updateMovieDetails } from '../../store/actions/actionCreators';

const AddMovie = ({movieItem}) => {
	// REDUX AND STATE
	const dispatch = useDispatch();

	// EVENT HANDLERS
	const submitMovieHandler = useCallback((e) => dispatch(submitMovie(e)), [dispatch, submitMovie]);
	const updateMovieDetailsHandler = useCallback((e) => dispatch(updateMovieDetails(e)), [dispatch, updateMovieDetails]);
	const resetMovieHandler = useCallback(() => dispatch(resetMovieDetails()), [dispatch, resetMovieDetails]);
	const cancelAddMovieHandler = useCallback(() => dispatch(cancelAddMovie()), [dispatch, cancelAddMovie]);
	
	return(
		<div className='addMovie-section'>
			<div className='addMovie-details'>
				<h2>ADD MOVIE</h2>
				<form onSubmit={submitMovieHandler}>
					<label>
						TITLE
						<input type='text' name='name' value={movieItem.title} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						RELEASE DATE
						<input type='text' name='date' value={movieItem.release_date} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						MOVIE URL
						<input type='text' name='img' value={movieItem.poster_path} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						GENRE
					
						<select 
							value={movieItem.genres}
							onChange={updateMovieDetailsHandler}
						>
							{movieItem.genres.map((item, index) => {
								return(
									<option key={index} value={'${item}'}>{item}</option>
								);
							})}
						</select>
					</label>
					<label>
						OVERVIEW
						<input type='text' name='overview' value={movieItem.overview} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						RATING
						<input type='text' name='rating' value={movieItem.vote_average} onChange={updateMovieDetailsHandler} required/>
					</label>
					<div className='addMovie-buttons'>
						<button className='btn btn-cancelItem' onClick={cancelAddMovieHandler}>CANCEL</button>
						<button className='btn btn-resetItem'onClick={resetMovieHandler}>RESET</button>
						<button type='submit' className='btn btn-addItem'>SUBMIT</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddMovie;
