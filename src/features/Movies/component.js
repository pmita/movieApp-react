import React, { useEffect} from 'react';
import './style.scss';
// COMPONENTS
import MovieCategories from '../MovieCategories';
import MovieItem from '../MovieItem';
import MovieFilters from '../MovieFilters';
import { useSelector, useDispatch } from 'react-redux';
import { loadMovies } from '../../store/actions/actionCreators';

const Movies = () => {
    // REDUX & STATE
    const movies = useSelector((state) => state.movieApp.movies);
    const filter = useSelector((state) => state.movieApp.filter);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadMovies());
	}, []);
	
        return (
	<section className='moviesSection'>

		<div className='moviesSection-options'>
			<MovieCategories />
			<MovieFilters filters={filter} />
		</div>
		<h2 className='moviesSection-items'>
			<span>{movies.length}</span> movies found
		</h2>
		<div className='itemsSection'>
			{movies && movies.map((item) => (
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




