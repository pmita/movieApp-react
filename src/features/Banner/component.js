/* eslint-disable max-len */
import React, {useContext} from 'react';
// import our state provider
import { ProjectContext } from '../../store/ProjectContext';
// import components
import Navbar from '../../shared/Navbar';
import SearchMovie from '../../shared/SearchMovie';
import MovieDetails from '../MovieDetails/component';
// import styling
import style from './style.module.scss';

const Banner = () => {
	// bind our Context api state locally
	const [isHidden, setIsHidden, showMovie, setShowMovie, movieDetails] = useContext(ProjectContext);

	return(
		<section className={style.bannerSection}>
			<Navbar 
				isHidden={isHidden}
				setIsHidden={setIsHidden}
			/>
			<img 
				className={style.bannerSection_img}
				src='https://images.pexels.com/photos/7991565/pexels-photo-7991565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' 
				alt='background for our banner'
			/>
			{showMovie
				? <MovieDetails 
						showMovie={showMovie} 
						setShowMovie={setShowMovie} 
						movieDetails={movieDetails} 
				  />
				: <SearchMovie />
			}
		</section>
	);
} 

export default Banner;
