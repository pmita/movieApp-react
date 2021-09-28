/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import components
import MovieCategories from '../MovieCategories';
import MovieItem from '../MovieItem';
import MovieFilters from '../MovieFilters';
import AddMovie from '../../shared/AddMovie';
import {filterArray} from '../../assets/functions/util';
// import mockData 
import { mockData } from '../../assets/data/MockData';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

export default class Movies extends Component {
    // define our state
    constructor(props){
        super(props);
        this.state = {
			movieItem : {name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''},
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
		this.handleCancelAddMovie = this.handleCancelAddMovie.bind(this);
		this.handleChangeMovieDetails = this.handleChangeMovieDetails.bind(this);
		this.handleSubmitMovie = this.handleSubmitMovie.bind(this);
		this.handleResetMovie = this.handleResetMovie.bind(this);
		this.handleEditMovie = this.handleEditMovie.bind(this);
		this.handleRemoveMovie = this.handleRemoveMovie.bind(this);
    }

	handleCancelAddMovie(){
		this.props.handleToggleIsHidden();
		this.handleResetMovie();
	}

	handleSubmitMovie(e){ // Add AddMovieItem form details in the moviesToShow[] 
		e.preventDefault();
		this.setState({ 
			moviesToShow : [...this.state.moviesToShow, {...this.state.movieItem, id : uuidv4()}]
		});
		this.props.handleToggleIsHidden();
	}
	
	handleResetMovie(){ // Reset AddMovieItem form
		this.setState({ 
			movieItem : {name : '', date : '', category : '', rating : '', img : '', overview : '', id : ''}
		});
	}
	
	handleChangeMovieDetails(e){ // Update each form field as the user types
		let formValue = this.state.movieItem;
		formValue[e.target.name] = e.target.value;
		this.setState({ movieItem : formValue });
	}

	handleEditMovie(currentMovieId){
		this.props.handleToggleIsHidden();
		const movieItemUpdated = this.state.moviesToShow.filter((item) => item.id === currentMovieId);
		this.setState({ movieItem : movieItemUpdated[0] });
	}

	handleRemoveMovie(currentMovieId){
		const moviesItemUpdated = this.state.moviesToShow.filter((item) => item.id !== currentMovieId);
		this.setState({ moviesToShow : moviesItemUpdated });
	}


	handleChangeCategory(event) {
		// change current category to active state
		const categoriesUpdated = this.state.categories.map((category) => {
			if (category.name === event.target.textContent){
				return { ...category, active: true};
			} else {
				return {...category, active: false};
			}
		});

		this.setState({ categories: categoriesUpdated });
		
		// update movies showing up according to category selected
		this.setState((prevState) => {			
			if (event.target.textContent === 'ALL') {
				return { moviesToShow: prevState.movies};
			} else {
				const moviesUpdated = prevState.movies.filter((item) => (
				item.category.toUpperCase().includes(event.target.textContent)
				));	
				return { moviesToShow: moviesUpdated};
			}

		});
	}

	handleChangeFilter(e) {
		this.setState({ filter: `${e.target.value}` });
		// sort movies by eityher stars or release date
		const filterValue = e.target.value;
		const arrayToFilter = this.state.moviesToShow;
		let moviesToShowUpdated = filterArray(filterValue, arrayToFilter);
		this.setState({ moviesToShowUpdated: moviesToShowUpdated });
	}

    render() {
		// eslint-disable-next-line no-unused-vars
		const {movieItem, movies, moviesToShow, categories, filter} = this.state;
        return (
	<section className='moviesSection'>
		{!this.props.isHidden 
			&& <AddMovie 
				isHidden={this.props.isHidden}
				movieItem={movieItem}
				// eslint-disable-next-line react/jsx-handler-names
				handleCancelAddMovie={this.handleCancelAddMovie}
				handleChangeMovieDetails={this.handleChangeMovieDetails}
				handleSubmitMovie={this.handleSubmitMovie}
				handleResetMovie={this.handleResetMovie}
			   />
		}
		<div className='moviesSection-options'>
			<MovieCategories 
				categories={categories}
				// eslint-disable-next-line react/jsx-handler-names
				handleChangeCategory={this.handleChangeCategory}
			/>
			<MovieFilters
				filters={filter}
				// eslint-disable-next-line react/jsx-handler-names
				handleChangeFilter={this.handleChangeFilter}
			/>
		</div>
		<h2 className='moviesSection-items'>
			<span>{moviesToShow.length}</span> movies found
		</h2>
		<div className='itemsSection'>
			{moviesToShow.map((item) => (
				<MovieItem
					key={item.id}
					name={item.name}
					date={item.date}
					category={item.category}
					img={item.img}
					id={item.id}
					handleEditMovie={this.handleEditMovie}
					handleRemoveMovie={this.handleRemoveMovie}
				/>
        ))}
		</div>
	</section>
        );
    }
}

Movies.propTypes = {
	isHidden : PropTypes.bool,
	handleToggleIsHidden : PropTypes.func,
	movieItem : PropTypes.object,
	movies : PropTypes.arrayOf(PropTypes.object),
	moviesToShow : PropTypes.arrayOf(PropTypes.object),
	categories   : PropTypes.arrayOf(PropTypes.object),
	filter : PropTypes.string
};



