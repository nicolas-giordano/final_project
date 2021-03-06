import React, { Component } from 'react';

import Card from './Card.js';

import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			trending: [],
			combat: [],
			fantasy: [],
			school: [],
		};
	}

	componentDidMount() {
		let self = this;
		let request_trending = new XMLHttpRequest();
		let request_mystery = new XMLHttpRequest();
		let request_fantasy = new XMLHttpRequest();
		let request_school = new XMLHttpRequest();

		request_trending.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				self.setState({ trending: data });
				console.log(data);
			}
		};

		request_trending.open('GET', 'https://kitsu.io/api/edge/trending/anime');
		request_trending.send();

		request_mystery.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				self.setState({ combat: data });
			}
		};
		request_mystery.open(
			'GET',
			'https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=mystery&sort=-averageRating&page[limit]=15'
		);
		request_mystery.send();

		request_fantasy.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				self.setState({ fantasy: data });
			}
		};

		request_fantasy.open(
			'GET',
			'https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=fantasy&sort=-averageRating&page[limit]=15'
		);
		request_fantasy.send();

		request_school.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				self.setState({ school: data });
			}
		};
		request_school.open(
			'GET',
			'https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=school&sort=-averageRating&page[limit]=15'
		);
		request_school.send();
	}

	render() {
		return (
			<>
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
					<div className="mystery">
						<h1>Mystery</h1>
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
					<div className="school">
						<h1>School Life</h1>
						<div className="anime__cards">
							{this.state.school.map((anime) => (
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

export default Home;
