import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Top from './Top';

import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			current: 'Home',
		};
	}

	render() {
		return (
			<section className="header">
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
						<NavLink to="/">Home</NavLink>
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
							Categories
						</span>
						<div className="dropdown">
							<a>Test1</a>
							<a>Test2</a>
							<a>Test3</a>
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
						<NavLink to="top">Top 100</NavLink>
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
