import React, { Component } from 'react';

import './styles/Square.css';

class Square extends Component {
	render() {
		const { coords, className, player } = this.props;
		if (coords.x === player.coords.x && coords.y )
		return (
			<div className={className} coords={coords}>

			</div>
		)
	}
}

export default Square
