import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
		return (
			<>
				<div class="card__listing">
					<div className="card">
						<img src={this.props.img} alt="other" key={this.props.id} />
					</div>
				</div>
			</>
		);
	}
}

export default Card;
