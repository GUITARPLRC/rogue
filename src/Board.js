import React, { Component } from 'react';

import './styles/Board.css';

import { weapons } from './data/index';

import Square from './Square';

class Board extends Component {
	render() {
		const { enemy, board } = this.props;
		return (
			<div className='board'>
				{board.map((each, i) => {
					if (each.enemyNumber) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} enemy={enemy[each.enemyNumber]} />
					} else if (each.weaponNumber) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} weapon={weapons[each.weaponNumber]} />
					} else if (each.health) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} health={each.health} />
					} else {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} />
					}
				})}
			</div>
		)
	}
}

export default Board
