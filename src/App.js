import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import our components
import Banner from './features/Banner';
import Movies from './features/Movies';
import Footer from './shared/Footer';
// import our context
import { ProjectProvider } from './store/ProjectContext';
import './App.scss';


export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			isHidden : true
		}
		this.handleToggleIsHidden = this.handleToggleIsHidden.bind(this);
	}

		handleToggleIsHidden() {
			this.setState({ isHidden: !this.state.isHidden });
		}
	render() {
		const {isHidden} = this.state;
		return (
			<ProjectProvider>
				<div>
					<Banner 
						handleToggleIsHidden={this.handleToggleIsHidden}
					/>
					<Movies 
						isHidden={isHidden} 
						handleToggleIsHidden={this.handleToggleIsHidden}
					/>
					<Footer />
				</div>
			</ProjectProvider>
		);
	}
}

App.propTypes = {
	isHidden : PropTypes.bool
};

App.defaultProps = {
	isHidden : true
};

