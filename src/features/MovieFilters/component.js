import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { changeFilters } from '../../store/actions/actionCreators';

const MovieFilters = ({filter}) => {
	const dispatch = useDispatch();

	const changeFilterHandler = (e) => dispatch(changeFilters(e));
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
