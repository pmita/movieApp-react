import React from 'react';
import './style.scss';

const component = ({
    name,
    date,
    category,
    img
}) => 
{
    return (
	<div className='movieItem-section'>
		<img src={img} alt='random text' />
		<ul className='movieItem-details'>
			<h4>{name}</h4>
			<h4>{date}</h4>
		</ul>
		<span className='movieItem-category'>{category}</span>
	</div>
    );
};

export default component;
