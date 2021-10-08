/* eslint-disable max-len */
import React, { useCallback } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { changeFilters } from '../../store/actions/actionCreators';

const MovieFilters = ({filter}) => {
	// REDUX
	const dispatch = useDispatch();
	
	// EVENT HANDLERS
	const changeFilterHandler = useCallback((e) => dispatch(changeFilters(e)), [dispatch, changeFilters]);
	
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
