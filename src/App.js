import React, { Component } from 'react';
// COMPONENTS
import Banner from './features/Banner';
import Movies from './features/Movies';
import Footer from './shared/Footer';
import './App.scss';


export default class App extends Component {
	render() {
		return (
			<>
				<Banner />
				<Movies />
				<Footer />
			</>
		);
	}
}


