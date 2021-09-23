import React from 'react';
// import our banner
import Banner from './features/Banner';
import Movies from './features/Movies';
import './App.scss';

export const App = () => 
{
  return (
	<div>
		<Banner />
		<Movies />
	</div>
  );
};
