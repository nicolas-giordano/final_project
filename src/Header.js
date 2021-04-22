import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<section className="header">
				<div className="header__left">
					<span className="header__item">Home</span>
					<div className="categories__menu">
						<span id="category" className="header__item">
							Categories
						</span>
						<div className="dropdown">
							<a>Test1</a>
							<a>Test2</a>
							<a>Test3</a>
						</div>
					</div>
					<span className="header__item">Top 100</span>
				</div>
				<div className="header__right">
					<form>
						<BsSearch className="search__icon" />
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
