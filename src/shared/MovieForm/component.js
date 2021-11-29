/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import './style.scss';
// REDUX
import { useDispatch } from 'react-redux';
import { submitMovie } from '../../store/actions/actionCreators';

const MovieForm = ({toggleAddMovie, setToggleAddMovie}) => {
	// REDUX AND STATE
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [img, setImg] = useState('');
    const [genre, setGenre] = useState('');
    const [overview, setOverview] = useState('');
    const [vote, setVote] = useState(null);
	// const [movieDetails, setMovieDetails] = useState({});
	const dispatch = useDispatch();

	// useEFFECT
	// useEffect(() => {
	// 	setMovieDetails({
    //         title : movie.title, 
    //         release_date : movie.release_date, 
    //         genres : movie.genres, 
    //         vote_average : movie.vote_average, 
    //         poster_path : movie.poster_path, 
    //         overview : movie.overview, 
    //         id : movie.id,});
	// }, [])

	// EFFECT HANDLERS
	const resetMovieDetailsHandler = useCallback(() => {
        setTitle('');
        setDate('');
        setImg('');
        setGenre('');
        setOverview('');
        setVote(null)}, []);

	const cancelEditMovieHandler = useCallback(() => {
		setToggleAddMovie(!toggleAddMovie);
		resetMovieDetailsHandler();
	}, [toggleAddMovie, setToggleAddMovie, resetMovieDetailsHandler]);

	const submitMovieHandler = useCallback((event) => {
		event.preventDefault();

        const item ={
            title: title,
            release_date : date,
            poster_path : img,
            genres : genre,
            overview : overview,
            vote_average : vote,
            id : Math.floor(Math.random() * 100000)
        }
        
		dispatch(submitMovie(item));
		setToggleAddMovie(!toggleAddMovie);
	}, [dispatch, toggleAddMovie, setToggleAddMovie]);

	
	return(
		<div className='addMovie-section'>
			<div className='addMovie-details'>
				<h2>EDIT MOVIE</h2>
				<form onSubmit={submitMovieHandler}>
					<label>
						TITLE
						<input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
					</label>
					<label>
						RELEASE DATE
						<input type='date' name='release_date' value={date} onChange={(e) => setDate(e.target.value)} required/>
					</label>
					<label>
						MOVIE URL
						<input type='text' name='poster_path' value={img} onChange={(e) => setImg(e.target.value)} required/>
					</label>
					<label>
						<span>GENRE</span>
						<select onChange={(e) => setGenre(e.target.value)} required>
							<option value='drama'>Drama</option>
							<option value='comedy'>Comedy</option>
							<option value='adventure'>Adventure</option>
						</select>
					</label>
					<label>
						OVERVIEW
						<input type='textarea' name='overview' value={overview} onChange={(e) => setOverview(e.target.value)} required/>
					</label>
					<label>
						RATING
						<input type='number' name='vote_average' value={vote} onChange={(e) => setVote(e.target.value)} required/>
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

export default MovieForm;
