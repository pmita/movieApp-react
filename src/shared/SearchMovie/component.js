import React, { useState } from 'react';
import './style.scss';
// ROUTER
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    // STATE, local
    const [searchInput, setSearchInput] = useState('');
	const navigate = useNavigate();

    // EVENT HANDLERS
    const searchMovieHandler = (e) => {
        e.preventDefault();
		navigate(`/search?query=${searchInput}`)
    }
	
    return(
	<div className='bannerSection-searchBar'>
		<h1 className='bannerSection-title'>FIND YOUR MOVIE</h1>
		<form onSubmit={searchMovieHandler}>
			<input 
				type='text' 
				name='movie'
				placeholder='Please enter a movie'
				onChange={(e) => setSearchInput(e.target.value)}
				value={searchInput}
			/>
			<button className='btn-searchMovie'>SEARCH</button>
		</form>
	</div>
    );
}

export default SearchBar;

