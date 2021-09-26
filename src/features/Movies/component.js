/* eslint-disable no-console */
import React, { Component } from 'react';
// import components
import MovieCategories from '../MovieCategories';
import MovieItem from '../MovieItem';
import MovieFilters from '../MovieFilters';
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
            movies       : mockData,
			moviesToShow : mockData,
			categories   : [
                { name: 'ALL', active: true },
                { name: 'DOCUMENTARY', active: false },
                { name: 'COMEDY', active: false },
                { name: 'HORROR', active: false },
                { name: 'ACTION', active: false }
            ],
			filter : 'RELEASE DATE'
        };
		this.handleChangeCategory = this.handleChangeCategory.bind(this);
		this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }

	handleChangeCategory(event) 
{
	// change current category to active state
	const categoriesUpdated = this.state.categories.map((category) => 
	{
		if (category.name === event.target.textContent)
	{
		return { ...category, active: true};
	}
	else 
	{
		return {...category, active: false};
	}
	});

	this.setState({ categories: categoriesUpdated });
	
	// update movies showing up according to category selected
	this.setState((prevState) => 
{			
		if (event.target.textContent === 'ALL')
{
		return { moviesToShow: prevState.movies};
			}
 else 
{
		const moviesUpdated = prevState.movies.filter((item) => (
		item.category.toUpperCase().includes(event.target.textContent)
		));

		return { moviesToShow: moviesUpdated};
		}

		});
	}

	handleChangeFilter(e)
{
	this.setState({ filter: `${e.target.value}` });
	// sort movies by eityher stars or release date
	let moviesToShowUpdated;

	if (e.target.value === 'STARS')
	{
			moviesToShowUpdated = this.state.moviesToShow.sort((a, b) => 
	{
				return b.rating - a.rating;
			});
		}
 else if (e.target.value === 'RELEASE DATE')
{
			moviesToShowUpdated = this.state.moviesToShow.sort((a, b) => 
			{
						const dateA = new Date(a.date);
						const dateB = new Date(b.date);
			
						return dateB - dateA;
					});
		}
		this.setState({ moviesToShowUpdated: moviesToShowUpdated });
	}

    render() 
{
        return (
	<section className='moviesSection'>
		<div className='moviesSection-options'>
			<MovieCategories 
				categories={this.state.categories}
				// eslint-disable-next-line react/jsx-handler-names
				handleChangeCategory={this.handleChangeCategory}
			/>
			<MovieFilters
				filters={this.state.filters}
				// eslint-disable-next-line react/jsx-handler-names
				handleChangeFilter={this.handleChangeFilter}
			/>
		</div>
		<h2 className='moviesSection-items'>
			<span>{this.state.moviesToShow.length}</span> movies found
		</h2>
		<div className='itemsSection'>
			{this.state.moviesToShow.map((item) => (
				<MovieItem
					key={item.id}
					name={item.name}
					date={item.date}
					category={item.category}
					img={item.img}
				/>
        ))}
		</div>
	</section>
        );
    }
}
