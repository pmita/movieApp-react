import React, { Component } from 'react';
import './style.scss';

export default class MovieFilters extends Component 
{
    // define our state
    constructor(props)
{
        super(props);
    }
    render() 
{
        return (
	<aside className='movieSection-filters'>
		<p>SORT BY</p>
		<select 
			value={this.props.filter}
			onChange={(e) => this.props.handleChangeFilter(e)}
		>
			<option
				value='RELEASE DATE'
			>
				RELEASE DATE
			</option>
			<option
				value='STARS'
			>
				STARS
			</option>
		</select>
	</aside>
        );
    }
}
