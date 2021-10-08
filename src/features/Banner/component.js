/* eslint-disable max-len */
import React from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux'; // redux state
// import components
import Navbar from '../../shared/Navbar';
import SearchMovie from '../../shared/SearchMovie';
import MovieDetails from '../MovieDetails/component';

const Banner = () => {
	// REDUX STATE
	const showMovie = useSelector((state) => state.movieApp.showMovie);

	return(
		<section className={style.bannerSection}>
			<Navbar />
			<img 
				className={style.bannerSection_img}
				src='https://images.pexels.com/photos/7991565/pexels-photo-7991565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' 
				alt='background for our banner'
			/>
			{showMovie
				? <MovieDetails 
						showMovie={showMovie}  
				  />
				: <SearchMovie />
			}
		</section>
	);
} 

export default Banner;
