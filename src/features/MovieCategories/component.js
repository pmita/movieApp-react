import React, { Component } from 'react';
import './style.scss';

export default class MovieCategories extends Component {
    render() {
        return (
	<aside className='movieSection-categories'>
		<ul className='category-items'>
			{this.props.categories.map((item, index) => (
				<h4 
					key={index} 
					className={item.active ? 'category-item active' : 'category-item'}
					onClick={this.props.handleChangeCategory}
				>
					{item.name}
				</h4>
            ))}
		</ul>
	</aside>
        );
    }
}
