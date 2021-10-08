/* eslint-disable max-len */
import React, { useCallback } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../store/actions/actionCreators';

const MovieCategories = ({categories}) => {
	// REDUX
	const dispatch = useDispatch();

	// EVENT HANDLERS
	const changeCategoryHandler = useCallback((e) => dispatch(changeCategory(e)), [dispatch, changeCategory]);
	
	return(
		<aside className='movieSection-categories'>
			<ul className='category-items'>
				{categories.map((item, index) => (
					<h4 
						key={index} 
						className={item.active ? 'category-item active' : 'category-item'}
						onClick={changeCategoryHandler}
					>
						{item.name}
					</h4>
            ))}
			</ul>
		</aside>
	);
}

export default MovieCategories;
