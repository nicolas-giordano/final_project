import React, { Component } from 'react';

import './Ranking.css';
class Ranking extends Component {
	constructor(props) {
		super(props);
		this.state = { anime: [] };
	}

	componentDidMount() {
		let self = this;
		let top = new XMLHttpRequest();

		top.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				data.sort((a, b) =>
					a.attributes.averageRating > b.attributes.averageRating ? 1 : -1
				);
				self.setState({ anime: data });
				console.log(data);
			}
		};

		top.open(
			'GET',
			'https://kitsu.io/api/edge/anime?page[limit]=20&sort=-averageRating'
		);
		top.send();
	}

	render() {
		return (
			<>
				<div className="ranking__container">
					<h1 className="ranking__header">
						Here are the Top 20 anime according to average ratings from Kitsu!
					</h1>
					<hr />
					<div className="ranking_list">
						<ol reversed>
							{this.state.anime.map((anime) => (
								<div className="ranking__list__item">
									<a
										href={'https://www.kitsu.io/anime/' + anime.id}
										target="_blank"
									>
										<li className="list__name">
											{anime.attributes.titles.en
												? anime.attributes.titles.en
												: anime.attributes.titles.en_jp}
										</li>
									</a>
									<div className="list__body">
										<p className="list__text">{anime.attributes.synopsis}</p>
										<img
											className="list__image"
											src={anime.attributes.posterImage.medium}
											alt="image for show"
										/>
									</div>
								</div>
							))}
						</ol>
					</div>
				</div>
			</>
		);
	}
}

export default Ranking;
