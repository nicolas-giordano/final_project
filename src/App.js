import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';
import Ranking from './Ranking.js';

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
							<Route path="/top_100" component={Ranking} exact />
						</Switch>
					</div>
				</BrowserRouter>
			</>
		);
	}
}

export default App;
