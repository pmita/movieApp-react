import React, { Component } from 'react';
import './style.scss';

export default class AddMovie extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
	<div className='addMovie-section'>
		<div className='addMovie-details'>
			<h2>ADD MOVIE</h2>
			<form onSubmit={(e) => this.props.handleSubmitMovie(e)}>
				<label>
					TITLE
					<input type='text' name='name' value={this.props.movieItem.name} onChange={(e) => this.props.handleChangeMovieDetails(e)}required/>
				</label>
				<label>
					RELEASE DATE
					<input type='text' name='date' value={this.props.movieItem.date} onChange={(e) => this.props.handleChangeMovieDetails(e)} required/>
				</label>
				<label>
					MOVIE URL
					<input type='text' name='img' value={this.props.movieItem.img} onChange={(e) => this.props.handleChangeMovieDetails(e)} required/>
				</label>
				<label>
					GENRE
					<input type='text' name='category' value={this.props.movieItem.category} onChange={(e) => this.props.handleChangeMovieDetails(e)} required/>
				</label>
				<label>
					OVERVIEW
					<input type='text' name='overview' value={this.props.movieItem.overview} onChange={(e) => this.props.handleChangeMovieDetails(e)} required/>
				</label>
				<label>
					RATING
					<input type='text' name='rating' value={this.props.movieItem.rating} onChange={(e) => this.props.handleChangeMovieDetails(e)} required/>
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
