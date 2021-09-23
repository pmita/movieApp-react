import React, { Component } from 'react';
// import components
import Navbar from '../../shared/Navbar';
import SearchMovie from '../../shared/SearchMovie';
import './style.scss';

export default class component extends Component 
{
    render() 
{
        return (
	<section className='bannerSection'>
		<Navbar />
		<img 
			className='bannerSection-img'
			src='https://images.pexels.com/photos/7991565/pexels-photo-7991565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' 
			alt='background for our banner'
		/>
		<SearchMovie />
	</section>
        );
    }
}
