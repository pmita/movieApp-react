import React, { useState, useCallback, useRef, useEffect } from 'react';
import './style.scss';
// REDUX
import { useDispatch } from 'react-redux';
import { submitMovie } from '../../store/actions/actionCreators';

const AddMovie = ({toggleAddMovie, setToggleAddMovie, movie}) => {
	// REDUX AND STATE
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [img, setImg] = useState('');
    const [genres, setGenres] = useState([]);
    const [overview, setOverview] = useState('');
    const [vote, setVote] = useState(0);
	const [newGenre, setNewGenre] = useState('')
	const newGenreInput = useRef(null)
	const dispatch = useDispatch();

	// useEFFECT
	useEffect(() => {
		if(movie){
			setTitle(movie.title)
			setDate(movie.date)
			setImg(movie.poster_path)
			setGenres(movie.genres)
			setOverview(movie.overview)
			setVote(movie.vote_average)
		}
	}, [])

	// EVENT HANDLERS
	const addGenreHanlder = (e) => {
		e.preventDefault();
		const genreTrimmed = newGenre.trim();

		if(genreTrimmed && !genres.includes(genreTrimmed)){
			setGenres((prevState) => [...prevState, genreTrimmed])
		}

		setNewGenre('')
		newGenreInput.current.focus();
	}
	const resetMovieDetailsHandler = useCallback(() => {
        setTitle('');
        setDate('');
        setImg('');
        setGenres([]);
        setOverview('');
        setVote(0)}, [setTitle, setDate, setImg, setGenres, setOverview, setVote]);

	const cancelEditMovieHandler = useCallback(() => {
		setToggleAddMovie(!toggleAddMovie);
		resetMovieDetailsHandler();
	}, [toggleAddMovie, setToggleAddMovie, resetMovieDetailsHandler]);

	const submitMovieHandler = useCallback((event) => {
		event.preventDefault();
        const item = {
			title: title,
            release_date : date,
            genres : genres,
            vote_average : vote,
            poster_path : img,
            overview : overview,
			id : Math.random()
        } 
        
		dispatch(submitMovie(item));
		setToggleAddMovie(!toggleAddMovie);
	}, [dispatch, toggleAddMovie, setToggleAddMovie, title, date, genres, vote, img, overview]);
	
	return(
		<div className='addMovie-section'>
			<div className='addMovie-details'>
				<h2>EDIT MOVIE</h2>
				<form onSubmit={submitMovieHandler}>
					<label>
						<span>TITLE</span>
						<input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required/>
					</label>
					<label>
						<span>RELEASE DATE</span>
						<input type='date' value={date} onChange={(e) => setDate(e.target.value)} required/>
					</label>
					<label>
						<span>MOVIE URL</span>
						<input type='text' value={img} onChange={(e) => setImg(e.target.value)} required/>
					</label>
					<label>
						<span>GENRES: </span>
						<div className='genres'>
							<input
								type='text'
								onChange={(e) => setNewGenre(e.target.value)}
								value={newGenre}
								ref={newGenreInput}
							/>
							<button className='btn btn-addItem' onClick={addGenreHanlder}>Add</button>
						</div>
					</label>
					<p>Current Genres : {genres.map((item) => <em key={item}>{item}, </em>)}</p>
					<label>
						<span>OVERVIEW</span>
						<textarea type='text' value={overview} onChange={(e) => setOverview(e.target.value)} required />
					</label>
					<label>
						<span>RATING</span>
						<input type='number' value={vote} onChange={(e) => setVote(e.target.value)} required/>
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
