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
	render() {
		return (
			<ProjectProvider>
				<>
					<Banner />
					<Movies />
					<Footer />
				</>
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

