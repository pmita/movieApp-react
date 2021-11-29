import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
// // ROUTER
import { useParams, useNavigate } from 'react-router-dom'

const Movie = () => {
    // STATE
	const [movie, setMovie] = useState(null)
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
    const { id } = useParams();
	const navigate = useNavigate()
    console.log(id);

	// FUNCTIONS
	const fetchMovie = async () => {
		setIsPending(true)

		try{
			const response = await fetch(`http://localhost:4000/movies/${id}`)

			if(!response){
				throw new Error(response.statusText)
			}

			const json = await response.json()
			setIsPending(false)
			setError(null)
			setMovie(json)
		} catch(err){
			setError(err.message)
			setIsPending(false)
		}
	}
	useEffect(() => {		
		fetchMovie()
	}, [])

	const movieDetails = () => {
		return (
			<>
				<img src={movie.poster_path} alt='Details about chosen movie' />
				<div className={style.movieDetails_content}>
					<h2>{movie.title}</h2>
					{movie.genres.map((item, index) => <p key={index}>{item} </p>)}
					<ul className={style.movieDetails_info}>
						<h4>{movie.release_date}</h4>
						<h4>{movie.vote_average}</h4>
					</ul>
					<p>{movie.overview}</p>
					<button 
						className={style.btn}
						onClick={() => navigate('/')}
					>  
						Go Back
					</button>
				</div>
			</>
		)
	}
	
    return(
	<div className={style.movieDetails_section}>
		{error && <p>{error}</p>}
		{isPending && <p>Loading...</p>}
		{movie && movieDetails()}
	</div>
    );
}

export default Movie;

