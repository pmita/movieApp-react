/* eslint-disable max-len */
import React, { useCallback } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { changeFilters } from '../../store/actions/actionCreators';

const MovieFilters = ({filter}) => {
	// REDUX
	const dispatch = useDispatch();
	
	// EVENT HANDLERS
	const changeFilterHandler = useCallback((filter) => dispatch(changeFilters(filter)), [dispatch, changeFilters]);
	
	return(
		<aside className='movieSection-filters'>
			<p>SORT BY</p>
			<select 
				value={filter}
				onChange={(event) => changeFilterHandler(event.target.value)}
			>
				<option
					value='DATE'
				>
					DATE
				</option>
				<option
					value='RATE'
				>
					RATE
				</option>
			</select>
		</aside>
	);
}

export default MovieFilters;
