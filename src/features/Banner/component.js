/* eslint-disable max-len */
import React from 'react';
// import our state provider
// import components
import Navbar from '../../shared/Navbar';
import SearchMovie from '../../shared/SearchMovie';
// import styling
import style from './style.module.scss';

const Banner = ({handleToggleIsHidden}) => {
	return(
		<section className={style.bannerSection}>
			<Navbar 
				handleToggleIsHidden={handleToggleIsHidden}
			/>
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
