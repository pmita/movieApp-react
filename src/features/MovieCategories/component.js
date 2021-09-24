import React, { Component } from 'react';
import './style.scss';

export default class component extends Component 
{
    // define our state
    constructor(props)
{
        super(props);
        this.state = {
            categories : [
                { name: 'ALL', active: true },
                { name: 'DOCUMENTARY', active: false },
                { name: 'COMEDY', active: false },
                { name: 'HORROR', active: false },
                { name: 'CRIME', active: false }
            ]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // define our events
    handleChange(e)
{
        const categoriesUpdated = this.state.categories.map((item) => 
{
            if (item.name === e.target.textContent)
{
                return { ...item, active: true };
            }
 else 
{
                return { ...item, active: false };
            }
        });

        // eslint-disable-next-line no-console
        console.log(e, categoriesUpdated);
        this.setState({ categories: categoriesUpdated });
    }
    render() 
{
        return (
	<aside className='movieSection-categories'>
		<ul className='category-items'>
			{this.state.categories.map((item, index) => (
				<h4 
					key={index} 
					className={item.active ? 'category-item active' : 'category-item'}
					onClick={this.handleChange}
				>
					{item.name}
				</h4>
            ))}
		</ul>
	</aside>
        );
    }
}
