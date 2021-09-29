import React from 'react';
import style from './style.module.scss';

const Navbar = ({isHidden, setIsHidden}) => {
	// define our evet handlers
	const toggleAddMovieHandler = () => {
		setIsHidden(!isHidden);
	}
	return(
		<nav className={style.navSection}>
			<div className={style.navSection_left}>
				<h4 id={style.logo}><span className={style.logo_highlight}>netflix</span>roulette</h4>
			</div>
			<div className={style.navSection_right}>
				<button className={style.btn_addItem} onClick={toggleAddMovieHandler}>
					+ ADD MOVIE
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
