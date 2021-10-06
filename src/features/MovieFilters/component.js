import React from 'react';
import './style.scss';

const MovieFilters = ({filter, changeFilterHandler}) => {
	return(
		<aside className='movieSection-filters'>
			<p>SORT BY</p>
			<select 
				value={filter}
				onChange={changeFilterHandler}
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

export default MovieFilters;
