import React, { Component } from 'react';
import Header from './Header.js';
import Card from './Card.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			anime: [],
		};
	}

	componentDidMount() {
		let self = this;
		let request_trending = new XMLHttpRequest();
		let request_categories = new XMLHttpRequest();

		request_trending.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				console.log(JSON.parse(this.responseText).data);
				self.setState({ anime: data });
			}
		};

		request_trending.open('GET', 'https://kitsu.io/api/edge/anime');
		request_trending.send();

		request_categories.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				console.log(data);
				data.map((category) => console.log(category.attributes.title));
			}
		};

		request_categories.open(
			'GET',
			'https://kitsu.io/api/edge/categories?page%5Blimit%5D=100'
		);
		request_categories.send();
	}

	render() {
		return (
			<>
				<Header />
				<section id="anime__listings">
					<div className="trending">
						<h1>Trending Anime</h1>
						<div className="anime__cards">
							{this.state.anime.map((anime) => (
								<Card img={anime.attributes.posterImage.small} id={anime.id} />
							))}
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default App;
