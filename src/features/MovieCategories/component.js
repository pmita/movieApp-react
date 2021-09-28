import React, { Component } from 'react';
import './style.scss';

export default class MovieCategories extends Component 
{
    // define our state
    constructor(props)
{
        super(props);
    }

    render() 
{
        return (
	<aside className='movieSection-categories'>
		<ul className='category-items'>
			{this.props.categories.map((item, index) => (
				<h4 
					key={index} 
					className={item.active ? 'category-item active' : 'category-item'}
					onClick={(e) => this.props.handleChangeCategory(e)}
				>
					{item.name}
				</h4>
            ))}
		</ul>
	</aside>
        );
    }
}
