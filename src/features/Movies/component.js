/* eslint-disable max-len */
import React, { useContext } from 'react';
import { ProjectContext } from '../../store/ProjectContext';
// import PropTypes from 'prop-types';
// import components
import MovieCategories from '../MovieCategories';
import MovieItem from '../MovieItem';
import MovieFilters from '../MovieFilters';
import AddMovie from '../../shared/AddMovie';
import { filterArray } from '../../assets/functions/util';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

const Movies = () => {
    // bind our Context api state with our component
    const [
        isHidden, setIsHidden, 
        showMovie, setShowMovie,
        // eslint-disable-next-line no-unused-vars
        movieDetails, setMovieDetails,
        movieItem, setMovieItem,
        // eslint-disable-next-line no-unused-vars
        movies, setMovies,
        moviesToShow, setMoviesToShow,
        categories, setCategories,
        filter, setFilter
    ] = useContext(ProjectContext);

    // define our event handlers
    const showMovieDetailsHandler = (movieId) => {
        setShowMovie(!showMovie);
        const movieDetailsUpdated = moviesToShow.filter((item) => item.id === movieId);
        setMovieDetails(movieDetailsUpdated[0]);
        // console.log(movieDetails);
    }

    const cancelAddMovieHandler = () => {
        setIsHidden(!isHidden);
        resetMovieHandler();
    }

    const resetMovieHandler = () => {
        setMovieItem(
            {name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''}
        );
    }

    const submitMovieHandler = (e)=> {
        e.preventDefault();
        setMoviesToShow([...moviesToShow, {...movieItem, id : uuidv4()}]);
        setIsHidden(!isHidden);
    }

    const updateMovieDetailsHandler = (e) => { // not sure about this one??
        const formValue = movieItem;
        formValue[e.target.name] = e.target.value;
        console.log(formValue);
        setMovieItem({...movieItem, formValue});
    }

    const editMovieHandler = (movieId) => {
        setIsHidden(!isHidden);
        const movieItemUpdated = moviesToShow.filter((item) => item.id === movieId);
        setMovieItem(movieItemUpdated[0]);
    }

    const removeMovie = (movieId) => {
        const moviesItemUpdated = moviesToShow.filter((item) => item.id !== movieId);
        setMoviesToShow(moviesItemUpdated);
    }

    const changeFilterHandler = (e) => {
        setFilter(e.target.value);
        const filterValue = e.target.value;
		const arrayToFilter = moviesToShow;
        let moviesToShowUpdated = filterArray(filterValue, arrayToFilter);
        setMoviesToShow(moviesToShowUpdated);
    }

    const changeCategoryHandler = (e) => {
		// change current category to active state
		const categoriesUpdated = categories.map((item) => {
			if (item.name === e.target.textContent){
				return { ...item, active: true};
			} else {
				return {...item, active: false};
			}
		});
        setCategories(categoriesUpdated);

        if(e.target.textContent !== 'ALL'){
            const moviesUpdated = movies.filter((item) => (
				item.category.toUpperCase().includes(e.target.textContent)
			));	
            setMoviesToShow(moviesUpdated);
        } else{
            setMoviesToShow(movies);
        }
    }

	
        return (
	<section className='moviesSection'>
		{!isHidden 
			&& <AddMovie 
				movieItem={movieItem}
				cancelAddMovieHandler={cancelAddMovieHandler}
				updateMovieDetailsHandler={updateMovieDetailsHandler}
				submitMovieHandler={submitMovieHandler}
				resetMovieHandler={resetMovieHandler}
			   />
		}
		<div className='moviesSection-options'>
			<MovieCategories 
				categories={categories}
				changeCategoryHandler={changeCategoryHandler}
			/>
			<MovieFilters
				filters={filter}
				changeFilterHandler={changeFilterHandler}
			/>
		</div>
		<h2 className='moviesSection-items'>
			<span>{moviesToShow.length}</span> movies found
		</h2>
		<div className='itemsSection'>
			{moviesToShow.map((item) => (
				<MovieItem
					key={item.id}
					name={item.name}
					date={item.date}
					category={item.category}
					img={item.img}
					id={item.id}
					editMovieHandler={editMovieHandler}
					removeMovie={removeMovie}
					showMovieDetailsHandler={showMovieDetailsHandler}
				/>
        ))}
		</div>
	</section>
        );
}

export default Movies;

// Movies.propTypes = {
// 	isHidden : PropTypes.bool,
// 	handleToggleIsHidden : PropTypes.func,
// 	movieItem : PropTypes.object,
// 	movies : PropTypes.arrayOf(PropTypes.object),
// 	moviesToShow : PropTypes.arrayOf(PropTypes.object),
// 	categories   : PropTypes.arrayOf(PropTypes.object),
// 	filter : PropTypes.string
// };



