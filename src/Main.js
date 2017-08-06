import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from './actions/playerActions';

import './styles/Main.css'

import Board from './Board';
import Stats from './Stats';

class Main extends Component {
	handleKeyPress = (event) => {
		if (event.keyCode === 40) {
			this.props.move('down')
		} else if (event.keyCode === 39) {
			this.props.move('right')
		} else if (event.keyCode === 38) {
			this.props.move('up')
		} else if (event.keyCode === 37) {
			this.props.move('left')
		}
	};

	componentWillMount() {
		document.addEventListener('keydown', (event) => this.handleKeyPress(event))
	}

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
