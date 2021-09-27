import React, { Component } from 'react';
import './style.scss';

export default class component extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className='movieItem-section'>
				<img src={this.props.img} alt='random text' />
				<ul className='movieItem-details'>
					<h4>{this.props.name}</h4>
					<h4>{this.props.date}</h4>
				</ul>
				<span className='movieItem-category'>{this.props.category}</span>
				<div className='movieItem-buttons'>
					<button className='btn btn-editItem' onClick={() => this.props.handleEditMovie(this.props.id)}>Edit</button>
					<button className='btn btn-removeItem' onClick={() => this.props.handleRemoveMovie(this.props.id)} >Remove</button>
				</div>
			</div>
		)
	}
}

