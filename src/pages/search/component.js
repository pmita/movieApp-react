import React, { useState, useEffect } from 'react'
import style from './style.module.scss'
// ROUTER
import { useNavigate, useLocation } from 'react-router-dom'

const Search = () => {
    // STATE
    const [movie, setMovie] = useState(null)
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    // extract the search query parameters
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('query')

    // useEFFECT
    const fetchMovie = async () => {
        setIsPending(true)

		try{
			const response = await fetch(`http://localhost:4000/movies?search=${query}&searchBy=title`)
            console.log(response);
			if(!response){
				throw new Error(response.statusText)
			}

            if(!response.data){
                throw new Error('No such movie found')
            }

			const json = await response.json()
			setIsPending(false)
			setError(null)
			setMovie(json.data[0])
		} catch(err){
			setError(err.message)
			setIsPending(false)
		}
    }

    // useEFFECT
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

export default Search;
