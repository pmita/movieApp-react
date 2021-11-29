/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import  App  from './App';
import './App.scss';
// REDUX RELATED
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './store/reducers';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(
    allReducers,
    composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>, 
    document.getElementById('root')
);
