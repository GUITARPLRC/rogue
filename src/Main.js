import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from './actions/playerActions';

import './styles/Main.css'

import Board from './Board';
import Stats from './Stats';

class Main extends Component {
	render() {
		const { player, enemy } = this.props;
		return (
			<div className='main'>
				<h1>The Dungeon of Doom</h1>
				<div className='game'>
					<Stats player={player} />
					<Board enemy={enemy} player={player} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		player: state.player,
		enemy: state.enemy
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(playerActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
