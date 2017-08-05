import React, { Component } from 'react';

import './styles/Square.css';

class Square extends Component {
	render() {
		const { coords, className, player } = this.props;
		let name = className;
		if (coords.x === player.coords.x && coords.y === player.coords.y) {
			name = 'square player'
		} else if ( coords.x === player.coords.x - 1 && coords.y === player.coords.y - 1 ) {
			name = 'square'
		} else if ( coords.x === player.coords.x - 1 && coords.y === player.coords.y ) {
			name = 'square'
		} else if ( coords.x === player.coords.x - 1 && coords.y === player.coords.y + 1 ) {
			name = 'square'
		} else if ( coords.x === player.coords.x && coords.y === player.coords.y - 1 ) {
			name = 'square'
		} else if ( coords.x === player.coords.x && coords.y === player.coords.y + 1 ) {
			name = 'square'
		} else if ( coords.x === player.coords.x + 1 && coords.y === player.coords.y - 1 ) {
			name = 'square'
		} else if ( coords.x === player.coords.x + 1 && coords.y === player.coords.y) {
			name = 'square'
		} else if ( coords.x === player.coords.x + 1 && coords.y === player.coords.y + 1) {
			name = 'square'
		}
		return (
			<div className={name} coords={coords}>

			</div>
		)
	}
}

export default Square
