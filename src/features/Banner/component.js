/* eslint-disable max-len */
import React from 'react';
import style from './style.module.scss';
// import components
import Navbar from '../../shared/Navbar';
import SearchMovie from '../../shared/SearchMovie';

const Banner = () => {
	return(
		<section className={style.bannerSection}>
			<Navbar />
			<img 
				className={style.bannerSection_img}
				src='https://images.pexels.com/photos/7991565/pexels-photo-7991565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' 
				alt='background for our banner'
			/>

			<SearchMovie />
		</section>
	);
} 

export default Banner;
