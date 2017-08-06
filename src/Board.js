import React, { Component } from 'react';

import './styles/Board.css';

import { board } from './data/index';

import Square from './Square';

class Board extends Component {
	render() {
		return (
			<div className='board'>
				{board.map((each, i) => {
					if (each.enemy) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} enemy={each.enemy} />
					} else if (each.weapon) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} />
					} else if (each.health) {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} health={each.health}/>
					} else {
						return <Square key={i} coords={each.coords} player={this.props.player} className={each.showing ? 'square' : 'square blackout'} />
					}
				})}
			</div>
		)
	}
}

export default Board
