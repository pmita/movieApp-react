import React, { Component } from 'react';
import './style.scss';

export default class component extends Component 
{
    render() 
{
        return (
	<nav className='navSection'>
		<div className='navSection-left'>
			<h4 id='logo'><span className='logo-highlight'>netflix</span>roulette</h4>
		</div>
		<div className='navSection-right'>
			<button className='btn-addItem'>
				+ ADD MOVIE
			</button>
		</div>
	</nav>
        );
    }
}
