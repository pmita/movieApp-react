import React from 'react';
import './App.scss';
// COMPONENTS
// import Movies from './features/Movies';
import Footer from './shared/Footer';
// ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// PAGES
import Details from './pages/movie/component';
import Home from './pages/home/component';
import Search from './pages/search/component';
import ErrorPage from './pages/404page/component';

const App = () => {	
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/search' element={<Search />} />
					<Route path='/films/:id' element={<Details />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;



