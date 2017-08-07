import React, { Component } from 'react';

import './styles/Board.css';

import { weapons } from './data/index';

import Square from './Square';

class Board extends Component {
	render() {
		const { getHealth, enemy, board } = this.props;
		return (
			<div className='board'>
				{board.map((each, i) => {
					if (each.enemyNumber) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} enemy={enemy[each.enemyNumber]} getHealth={getHealth} />
					} else if (each.weaponNumber) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} weapon={weapons[each.weaponNumber]} getHealth={getHealth} />
					} else if (each.health) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} health={each.health} getHealth={getHealth} />
					} else {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} getHealth={getHealth} />
					}
				})}
			</div>
		)
	}
}

export default Board
