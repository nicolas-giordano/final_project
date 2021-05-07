import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Card from './Card.js';
import Header from './Header.js';
import Home from './Home.js';
import Top from './Top.js';

import './App.css';

class App extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route path="/" component={Home} exact />
							<Route path="top" component={Top} exact />
						</Switch>
					</div>
				</BrowserRouter>
			</>
		);
	}
}

export default App;
