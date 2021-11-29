import React from 'react';
import './App.scss';
// COMPONENTS
// import Movies from './features/Movies';
import Footer from './shared/Footer';
// ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Details from './pages/movie/component';
import Home from './pages/home/component';

const App = () => {	
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/films/:id' element={<Details />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;



