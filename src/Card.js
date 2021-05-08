import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

import './Card.css';

class Card extends Component {
	render() {
		return (
			<div>
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
						<a
							href={'https://www.kitsu.io/anime/' + this.props.id}
							target="_blank"
						>
							<img src={this.props.img} alt="other" key={this.props.id} />
						</a>
					</Tooltip>
				</div>
			</div>
		);
	}
}

export default Card;
