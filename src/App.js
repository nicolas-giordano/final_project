import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Categories from './Categories.js';
import Header from './Header.js';
import Home from './Home.js';
import Ranking from './Ranking.js';

import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route path="/final_project" component={Home} exact />
							<Route
								path="/final_project/top_20_anime"
								component={Ranking}
								exact
							/>
							<Route
								path="/final_project/Categories"
								component={Categories}
								exact
							/>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
