import React, { useState, useCallback } from 'react';
import './style.scss';

const SearchBar = () => {
    // define our local state
    const [searchInput, setSearchInput] = useState('');

    // define our events handlers
    const searchMovieHandler = useCallback((e) => {
        e.preventDefault();
    }, []);

    const changeSearchInputHandler = useCallback((e) => {
        setSearchInput(e.target.value);
    }, [setSearchInput]);
	
    return(
	<div className='bannerSection-searchBar'>
		<h1 className='bannerSection-title'>FIND YOUR MOVIE</h1>
		<form onSubmit={searchMovieHandler}>
			<input 
				type='text' 
				placeholder='What movie do you want to see?'
				value={searchInput}
				onChange={changeSearchInputHandler}
			/>
			<button className='btn-searchMovie'>SEARCH</button>
		</form>
	</div>
    );
}

export default SearchBar;

