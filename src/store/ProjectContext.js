/* eslint-disable no-unused-vars */
import React, {useState, useEffect, createContext} from 'react';
// import our assets
import {mockData} from '../assets/data/MockData';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => {
    // defining our state
    // const [testValue, setTestValue] = useState('Test from Test Value');
    const [isHidden, setIsHidden] = useState(true);
    const [showMovie, setShowMovie] = useState(false);
    const [movieDetails, setMovieDetails] = useState({});
    const [movieItem, setMovieItem] = useState({});
    const [movies, setMovies] = useState([]);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState('');

    // define our useEffect actions
    useEffect(() => {
        setMovieItem({
            name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''
        });
        setMovies(mockData);
        setMoviesToShow(mockData);
        setCategories([
            { name: 'ALL', active: true },
            { name: 'DOCUMENTARY', active: false },
            { name: 'COMEDY', active: false },
            { name: 'HORROR', active: false },
            { name: 'ACTION', active: false }
        ]);
        setFilter('RELEASE DATE');
    }, [])

    return(
	<ProjectContext.Provider 
		value={[ 
            isHidden, setIsHidden, 
            showMovie, setShowMovie,
            movieDetails, setMovieDetails,
            movieItem, setMovieItem,
            movies, setMovies,
            moviesToShow, setMoviesToShow,
            categories, setCategories,
            filter, setFilter
        ]}
	>
		{props.children}
	</ProjectContext.Provider>
    )
}
