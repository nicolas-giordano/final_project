import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [],
			dropdown: [],
		};
	}

	componentDidMount() {
		let self = this;
		let categories = new XMLHttpRequest();

		categories.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let data = JSON.parse(this.responseText).data;
				data.sort((a, b) =>
					a.attributes.totalMediaCount < b.attributes.totalMediaCount ? 1 : -1
				);
				self.setState({ categories: data });
				self.setState({ dropdown: data.slice(0, 10) });
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
			<section className="header">
				{console.log(this.state)}
				<div className="header__left">
					<span
						className="header__item"
						// id={
						// 	document.getElementsByClassName('header__item')[0].innerHTML ===
						// 	this.state.current
						// 		? 'current'
						// 		: ''
						// }
					>
						<NavLink to="/final_project" className="nav__link">
							Home
						</NavLink>
					</span>
					<div className="categories__menu">
						<span
							// id={
							// 	document.getElementsByClassName('header__item')[1].innerHTML ===
							// 	this.state.current
							// 		? 'current'
							// 		: ''
							// }
							className="header__item"
						>
							<NavLink to="/final_project/Categories" className="nav__link">
								Categories
							</NavLink>
						</span>
						<div className="dropdown">
							{this.state.dropdown.map((category) => (
								<a
									href={
										'https://www.kitsu.io/explore/anime/category/' +
										category.attributes.slug
									}
									target="_blank"
								>
									{category.attributes.title}
								</a>
							))}
						</div>
					</div>
					<span
						className="header__item"
						// id={
						// 	document.getElementsByClassName('header__item')[2].innerHTML ===
						// 	this.state.current
						// 		? 'current'
						// 		: ''
						// }
					>
						<NavLink to="/final_project/top_20_anime" className="nav__link">
							Top 20 Anime
						</NavLink>
					</span>
				</div>
				<div className="header__right">
					<form>
						<BsSearch className="search__icon" size=".85em" />
						<input
							type="text"
							id="header__search"
							placeholder="Search for a title..."
							autoComplete="none"
						/>
					</form>
				</div>
			</section>
		);
	}
}

export default Header;
