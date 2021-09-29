import React from 'react';
import './style.scss';

const Navbar = ({handleToggleIsHidden}) => {
	return(
		<nav className='navSection'>
			<div className='navSection-left'>
				<h4 id='logo'><span className='logo-highlight'>netflix</span>roulette</h4>
			</div>
			<div className='navSection-right'>
				<button className='btn-addItem' onClick={handleToggleIsHidden}>
					+ ADD MOVIE
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
