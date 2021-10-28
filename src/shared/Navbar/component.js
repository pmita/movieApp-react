import React, { useState } from 'react';
import style from './style.module.scss';
// COMPONENTS
import AddMovie from '../AddMovie/component';


const Navbar = () => {
	// REDUX & STATE
	const [toggleAddMovie, setToggleAddMovie] = useState(false);

	// EVENT HANDLERS
	const addMovieHandler = () => setToggleAddMovie(!toggleAddMovie);
	return(
		<>
			<nav className={style.navSection}>
				<div className={style.navSection_left}>
					<h4 
						id={style.logo}
					>
						<span className={style.logo_highlight}>netflix</span>roulette
					</h4>
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
			{toggleAddMovie && 
				<AddMovie 
					toggleAddMovie={toggleAddMovie}
					setToggleAddMovie={setToggleAddMovie}
				/>
			}
		</>
	);
}

export default Navbar;
