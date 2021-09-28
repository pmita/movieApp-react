/* eslint-disable max-len */
import React, { Component } from 'react';
// import components
import Navbar from '../../shared/Navbar';
import SearchMovie from '../../shared/SearchMovie';
import './style.scss';

export default class Banner extends Component 
{
	constructor(props){
		super(props);
	}

    render() 
{
        return (
	<section className='bannerSection'>
		<Navbar 
			isHidden={this.props.isHidden} 
			handleToggleIsHidden={this.props.handleToggleIsHidden}
		/>
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
