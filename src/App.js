import React from 'react';
// import our components
import Banner from './features/Banner';
import Movies from './features/Movies';
import Footer from './shared/Footer';
import './App.scss';

export const App = () => 
{
  return (
	<div>
		<Banner />
		<Movies />
		<Footer />
	</div>
  );
};
