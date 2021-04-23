import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		return (
			<>
				<div className="card">
					<img src={this.props.img} alt="other" key={this.props.id} />
				</div>
			</>
		);
	}
}

export default Card;
