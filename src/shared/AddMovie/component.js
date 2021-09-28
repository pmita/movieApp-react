import React, { Component } from 'react';
import './style.scss';

export default class AddMovie extends Component {
    render() {
        return (
	<div className='addMovie-section'>
		<div className='addMovie-details'>
			<h2>ADD MOVIE</h2>
			<form onSubmit={this.props.handleSubmitMovie}>
				<label>
					TITLE
					<input type='text' name='name' value={this.props.movieItem.name} onChange={this.props.handleChangeMovieDetails} required/>
				</label>
				<label>
					RELEASE DATE
					<input type='text' name='date' value={this.props.movieItem.date} onChange={this.props.handleChangeMovieDetails} required/>
				</label>
				<label>
					MOVIE URL
					<input type='text' name='img' value={this.props.movieItem.img} onChange={this.props.handleChangeMovieDetails} required/>
				</label>
				<label>
					GENRE
					<input type='text' name='category' value={this.props.movieItem.category} onChange={this.props.handleChangeMovieDetails} required/>
				</label>
				<label>
					OVERVIEW
					<input type='text' name='overview' value={this.props.movieItem.overview} onChange={this.props.handleChangeMovieDetails} required/>
				</label>
				<label>
					RATING
					<input type='text' name='rating' value={this.props.movieItem.rating} onChange={this.props.handleChangeMovieDetails} required/>
				</label>
				<div className='addMovie-buttons'>
					<button className='btn btn-cancelItem' onClick={this.props.handleCancelAddMovie}>CANCEL</button>
					<button className='btn btn-resetItem'onClick={this.props.handleResetMovie}>RESET</button>
					<button type='submit' className='btn btn-addItem'>SUBMIT</button>
				</div>
			</form>
		</div>
	</div>
        )
    }
}
