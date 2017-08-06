import React, { Component } from 'react';

import './styles/Square.css';

class Square extends Component {

	render() {
		let health, weapon, enemy = false;

		if (this.props.health) {
			health = true;
		} else if (this.props.weapon) {
			weapon = true;
		} else if (this.props.enemy) {
			enemy = true;
		}
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
				{name.includes('player') ? <div className='warrior'></div> : null}
				{health ? <div className='health'></div> : null}
				{weapon ? <div className='weapon'></div> : null}
				{enemy ? <div className='enemy'></div> : null}
			</div>
		)
	}
}

export default Square
