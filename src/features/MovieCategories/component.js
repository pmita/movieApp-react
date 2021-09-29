import React from 'react';
import './style.scss';

const MovieCategories = ({categories, changeCategoryHandler}) => {
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
