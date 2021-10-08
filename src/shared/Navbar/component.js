import React, { useCallback } from 'react';
import style from './style.module.scss';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../store/actions/actionCreators';


const Navbar = () => {
	// REDUX
	const dispatch = useDispatch();

	// EVENT HANDLERS
	const addMovieHandler = useCallback(() => dispatch(addMovie()), [dispatch, addMovie]);

	return(
		<nav className={style.navSection}>
			<div className={style.navSection_left}>
				<h4 id={style.logo}><span className={style.logo_highlight}>netflix</span>roulette</h4>
			</div>
			<div className={style.navSection_right}>
				<button 
					className={style.btn_addItem} 
					onClick={addMovieHandler}
				>
					+ ADD MOVIE
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
