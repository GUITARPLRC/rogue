import React, { Component } from 'react';

import './styles/Board.css';

import { board } from './data/index';

import Square from './Square';

class Board extends Component {
	render() {
		const { getHealth } = this.props;
		return (
			<div className='board'>
				{board.map((each, i) => {
					if (each.enemy) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} enemy={each.enemy} getHealth={getHealth} />
					} else if (each.weapon) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} weapon={each.weapon} getHealth={getHealth} />
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
