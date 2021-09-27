import React, { Component } from 'react';
import './style.scss';

export default class component extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
	<div className={this.props.isHidden ? 'addMovie-section hidden' : 'addMovie-section'}>
		<div className='addMovie-details'>
			<h2>ADD MOVIE</h2>
			<form onSubmit={(e) => this.props.handleSubmitMovie(e)}>
				<label>
					TITLE
					<input type='text' name='name' defaultValue={this.props.movieItem.name} onChange={(e) => this.props.handleChangeMovieDetails(e)}required/>
				</label>
				<label>
					RELEASE DATE
					<input type='text' name='date' defaultValue={this.props.movieItem.date} onChange={(e) => this.props.handleChangeMovieDetails(e)} required/>
				</label>
				<label>
					MOVIE URL
					<input type='text' name='img' defaultValue={this.props.movieItem.img} onChange={(e) => this.props.handleChangeMovieDetails(e)} required/>
				</label>
				<label>
					GENRE
					<input type='text' name='category' defaultValue={this.props.movieItem.category} onChange={(e) => this.props.handleChangeMovieDetails(e)} required/>
				</label>
				<label>
					OVERVIEW
					<input type='text' name='overview' defaultValue={this.props.movieItem.overview} onChange={(e) => this.props.handleChangeMovieDetails(e)} required/>
				</label>
				<label>
					RATING
					<input type='text' name='rating' defaultValue={this.props.movieItem.rating} onChange={(e) => this.props.handleChangeMovieDetails(e)} required/>
				</label>
				<div className='addMovie-buttons'>
					<button className='btn btn-resetItem' onClick={this.props.handleCancelAddMovie}>CANCEL</button>
					<button className='btn btn-resetItem' onClick={this.props.handleResetMovie}>RESET</button>
					<button type='submit' className='btn btn-addItem'>SUBMIT</button>
				</div>
			</form>
		</div>
	</div>
        )
    }
}
