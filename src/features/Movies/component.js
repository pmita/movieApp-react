import React, { Component } from 'react';
// import components
import MovieItem from '../MovieItem';
// import mockData 
import { mockData } from '../../assets/data/MockData';
import './style.scss';

export default class component extends Component 
{
    // define our state
    constructor(props)
{
        super(props);
        this.state = {
            movies : mockData
        };
    }

    render() 
{
        return (
	<section className='moviesSection'>
		<h2 className='moviesSection-totalMovies'>
			<span>{this.state.movies.length}</span> movies found
		</h2>
		<div className='itemsSection'>
			{this.state.movies.map((item) => (
				<MovieItem
					key={item.id}
					name={item.name}
					date={item.date}
					category={item.category}
					rating={item.rating}
					img={item.img}
					id={item.id}
				/>
        ))}
		</div>
	</section>
        );
    }
}
