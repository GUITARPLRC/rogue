import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as playerActions from './actions/playerActions';

import './styles/Main.css'

import Board from './Board';
import Stats from './Stats';

class Main extends Component {
	handleKeyPress = (event) => {
		event.preventDefault();
		if (event.keyCode === 40) {
			let move = 'down'
			this.props.checkObjects(this.props.board, move)
		} else if (event.keyCode === 39) {
			let move = 'right'
			this.props.checkObjects(this.props.board, move)
		} else if (event.keyCode === 38) {
			let move = 'up'
			this.props.checkObjects(this.props.board, move)
		} else if (event.keyCode === 37) {
			let move = 'left'
			this.props.checkObjects(this.props.board, move)
		} else if (event.keyCode === 32) {
			let move = 'space'
			this.props.checkObjects(this.props.board, move)
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', (event) => this.handleKeyPress(event))

	}

	render() {
		const { board, player, enemy, weapons } = this.props;
		return (
			<div className='main'>
				<h1>The Dungeon of Doom</h1>
				<div className='game'>
					<Stats player={player} />
					<Board board={board} enemy={enemy} player={player} weapons={weapons} getHealth={this.props.getHealth} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		player: state.player,
		enemy: state.enemy,
		board: state.board
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(playerActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
