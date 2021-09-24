import React, { Component } from 'react';
import './style.scss';

export default class component extends Component 
{
    // define our state
    constructor(props)
{
        super(props);
        this.state = {
            filterValue : 'RELEASE DATE'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    // define our event handlers
    handleChange(e) 
{
        this.setState({ filterValue: e.target.value });
    }
    render() 
{
        return (
	<aside className='movieSection-filters'>
		<p>SORT BY</p>
		<select 
			value={this.state.filterValue}
			onChange={this.handleChange}
		>
			<option value='RELEASE DATE'>RELEASE DATE</option>
			<option value='STARS'>STARS</option>
		</select>
	</aside>
        );
    }
}
