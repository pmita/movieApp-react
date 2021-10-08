/* eslint-disable max-len */
import React from 'react';
import './style.scss';
// import components
import MovieCategories from '../MovieCategories';
import MovieItem from '../MovieItem';
import MovieFilters from '../MovieFilters';
import AddMovie from '../../shared/AddMovie';
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
		{!isHidden && <AddMovie movieItem={movie} />}
		<div className='moviesSection-options'>
			<MovieCategories categories={categories} />
			<MovieFilters filters={filter} />
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




