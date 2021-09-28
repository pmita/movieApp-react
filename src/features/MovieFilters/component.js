import React, { Component } from 'react';
import './style.scss';

export default class MovieFilters extends Component {
    render() {
        return (
	<aside className='movieSection-filters'>
		<p>SORT BY</p>
		<select 
			value={this.props.filter}
			onChange={this.props.handleChangeFilter}
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
