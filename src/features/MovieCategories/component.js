import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../store/actions/actionCreators';

const MovieCategories = ({categories}) => {
	const dispatch = useDispatch();

	const changeCategoryHandler = (e) => dispatch(changeCategory(e));
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
