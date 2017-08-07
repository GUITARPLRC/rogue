import React, { Component } from 'react';

import './styles/Square.css';

class Square extends Component {

	render() {
		let healthHere, weaponHere, enemyHere = false;

		if (this.props.health) {
			healthHere = true;
		} else if (this.props.weapon) {
			weaponHere = true;
		} else if (this.props.enemy) {
			enemyHere = true;
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
				{healthHere ? <div className='health'></div> : null}
				{weaponHere ? <div className='weapon'></div> : null}
				{enemyHere ? <div className='enemy'></div> : null}
			</div>
		)
	}
}

export default Square
