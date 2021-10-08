/* eslint-disable max-len */
import React from 'react';
// import PropTypes from 'prop-types';
import MovieCategories from '../MovieCategories';
import MovieItem from '../MovieItem';
import MovieFilters from '../MovieFilters';
import AddMovie from '../../shared/AddMovie';
import './style.scss';
// REDUX
import { useSelector } from 'react-redux';

const Movies = () => {
    // REDUX
    const isHidden = useSelector((state) => state.movieApp.isHidden);
    const moviesToShow = useSelector((state) => state.movieApp.moviesToShow);
    const movie = useSelector((state) => state.movieApp.movie);
    const categories = useSelector((state) => state.movieApp.categories);
    const filter = useSelector((state) => state.movieApp.filter);
	
        return (
	<section className='moviesSection'>
		{!isHidden 
			&& <AddMovie 
				movieItem={movie}
			   />
		}
		<div className='moviesSection-options'>
			<MovieCategories 
				categories={categories}
			/>
			<MovieFilters
				filters={filter}
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
// 	movie : PropTypes.object,
// 	movies : PropTypes.arrayOf(PropTypes.object),
// 	moviesToShow : PropTypes.arrayOf(PropTypes.object),
// 	categories   : PropTypes.arrayOf(PropTypes.object),
// 	filter : PropTypes.string
// };



