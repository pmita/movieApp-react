import React from 'react';
import './App.scss';
// COMPONENTS
import Banner from './features/Banner';
import Movies from './features/Movies';
import Footer from './shared/Footer';

const App = () => {	
	return (
		<>
			<Banner />
			<Movies />
			<Footer />
		</>
	);
}

export default App;



