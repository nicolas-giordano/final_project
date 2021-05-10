import React, { Component } from 'react';

import './Categories.css';

export default class Categories extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [],
		};
	}

	componentDidMount() {
		let self = this;
		let categories = new XMLHttpRequest();

		categories.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				data.sort((a, b) => (a.attributes.title > b.attributes.title ? 1 : -1));
				self.setState({ categories: data });
			}
		};

		categories.open(
			'GET',
			'https://kitsu.io/api/edge/categories?page[limit]=500'
		);
		categories.send();
	}

	render() {
		return (
			<div className="categories__container">
				{this.state.categories.map((category) => (
					<a
						href={
							'https://www.kitsu.io/explore/anime/category/' +
							category.attributes.slug
						}
						className="anime__category"
					>
						<p>{category.attributes.title}</p>
					</a>
				))}
			</div>
		);
	}
}
