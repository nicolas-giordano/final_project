import React, { Component } from 'react';
import Header from './Header.js';
import Card from './Card.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			trending: [],
			combat: [],
			fantasy: [],
		};
	}

	componentDidMount() {
		let self = this;
		let request_trending = new XMLHttpRequest();
		let request_combat = new XMLHttpRequest();
		let request_fantasy = new XMLHttpRequest();

		request_trending.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				self.setState({ trending: data });
				console.log(data);
			}
		};

		request_trending.open('GET', 'https://kitsu.io/api/edge/trending/anime');
		request_trending.send();

		request_combat.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				self.setState({ combat: data });
			}
		};
		request_combat.open(
			'GET',
			'https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=mystery'
		);
		request_combat.send();

		request_fantasy.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				self.setState({ fantasy: data });
			}
		};

		request_fantasy.open(
			'GET',
			'https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=fantasy'
		);
		request_fantasy.send();
	}

	render() {
		return (
			<>
				<Header />
				<section id="anime__listings">
					<div className="trending">
						<h1>Trending Anime</h1>
						<div className="anime__cards">
							{this.state.trending.map((anime) => (
								<Card
									img={anime.attributes.posterImage.small}
									id={anime.id}
									key={anime.id}
									name={anime.attributes.titles.en}
									altName={anime.attributes.slug}
								/>
							))}
						</div>
					</div>
					<div className="combat">
						<h1>Fighting</h1>
						<div className="anime__cards">
							{this.state.combat.map((anime) => (
								<Card
									img={anime.attributes.posterImage.small}
									id={anime.id}
									key={anime.id}
									name={anime.attributes.titles.en}
									altName={anime.attributes.slug}
								/>
							))}
						</div>
					</div>
					<div className="fantasy">
						<h1>Fatasy World</h1>
						<div className="anime__cards">
							{this.state.fantasy.map((anime) => (
								<Card
									img={anime.attributes.posterImage.small}
									id={anime.id}
									key={anime.id}
									name={anime.attributes.titles.en}
									altName={anime.attributes.slug}
								/>
							))}
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default App;
