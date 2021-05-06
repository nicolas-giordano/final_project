import React, { Component } from 'react';
import './Card.css';
import Tooltip from '@material-ui/core/Tooltip';

class Card extends Component {
	render() {
		return (
			<>
				<div className="card">
					<Tooltip
						title={
							<h1 style={{ fontSize: '16px' }}>
								{this.props.name ? this.props.name : this.props.altName}
							</h1>
						}
						placement="top"
						className="tooltip"
					>
						<img src={this.props.img} alt="other" key={this.props.id} />
					</Tooltip>
				</div>
			</>
		);
	}
}

export default Card;
