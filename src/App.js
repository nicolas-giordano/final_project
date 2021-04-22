import React, { Component } from 'react';
import Header from './Header.js';
import Trending from './Trending.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<section id="anime__listings">
					<Trending />
				</section>
			</>
		);
	}
}

export default App;
