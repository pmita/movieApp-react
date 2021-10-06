import React from 'react';
import './style.scss';

const AddMovie = ({
	movieItem, 
	cancelAddMovieHandler, 
	updateMovieDetailsHandler, 
	submitMovieHandler, 
	resetMovieHandler
}) => {
	return(
		<div className='addMovie-section'>
			<div className='addMovie-details'>
				<h2>ADD MOVIE</h2>
				<form onSubmit={submitMovieHandler}>
					<label>
						TITLE
						<input type='text' name='name' value={movieItem.name} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						RELEASE DATE
						<input type='text' name='date' value={movieItem.date} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						MOVIE URL
						<input type='text' name='img' value={movieItem.img} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						GENRE
						<input type='text' name='category' value={movieItem.category} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						OVERVIEW
						<input type='text' name='overview' value={movieItem.overview} onChange={updateMovieDetailsHandler} required/>
					</label>
					<label>
						RATING
						<input type='text' name='rating' value={movieItem.rating} onChange={updateMovieDetailsHandler} required/>
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
