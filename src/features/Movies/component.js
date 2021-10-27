/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect} from 'react';
import './style.scss';
// import components
import MovieCategories from '../MovieCategories';
import MovieItem from '../MovieItem';
import MovieFilters from '../MovieFilters';
// import AddMovie from '../../shared/AddMovie';
import EditMovie from '../../shared/EditMovie';
import { useSelector, useDispatch } from 'react-redux';
import { loadMovies } from '../../store/actions/actionCreators';

const Movies = () => {
    // REDUX
    const isHidden = useSelector((state) => state.movieApp.isHidden);
    const moviesToShow = useSelector((state) => state.movieApp.moviesToShow);
    const movie = useSelector((state) => state.movieApp.movie);
    const categories = useSelector((state) => state.movieApp.categories);
    const filter = useSelector((state) => state.movieApp.filter);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadMovies());
	}, []);
	
        return (
	<section className='moviesSection'>
		{!isHidden && <EditMovie movieItem={movie} />}
		<div className='moviesSection-options'>
			<MovieCategories />
			<MovieFilters filters={filter} />
		</div>
		<h2 className='moviesSection-items'>
			<span>{moviesToShow.length}</span> movies found
		</h2>
		<div className='itemsSection'>
			{moviesToShow && moviesToShow.map((item) => (
				<MovieItem
					key={item.id}
					movie={item}
					id={item.id}
				/>
				))}
		</div>
	</section>
        );
}

export default Movies;




