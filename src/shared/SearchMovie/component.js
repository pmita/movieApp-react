import React, { Component } from 'react';
import './style.scss';

export default class SearchBar extends Component 
{
    // defining our state
    constructor(props) 
{
        super(props);
        this.state = {
            value : ''
        };
        // bind our state with our methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // defining our event handlers
    handleSubmit(e) 
{
        e.preventDefault();
    }
    handleChange(e) 
{
        this.setState({ value: e.target.value });
    }

    render() 
{
        return (
	<div className='bannerSection-searchBar'>
		<h1 className='bannerSection-title'>FIND YOUR MOVIE</h1>
		<form onSubmit={this.handleSubmit}>
			<input 
				type='text' 
				placeholder='What movie do you want to see?'
				value={this.state.value}
				onChange={this.handleChange}
			/>
			<button className='btn-searchMovie'>SEARCH</button>
		</form>
	</div>
        );
    }
}
