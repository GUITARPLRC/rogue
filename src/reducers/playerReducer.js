// Player State

import { weapons } from '../data/index';

export default (state = [], action) => {
	let newState = JSON.parse(JSON.stringify(state));
	switch(action.type) {
		case 'BATTLE':
			return newState;
		case 'MOVE':
			return changePosition(action.value, newState);
		case 'CHECK_OBJECTS':
			return checkForObject(action.board, newState);
		default:
			return newState;
	}
};

function changePosition(movement, state) {
	if (movement === 'left') {
		if (state.coords.y <= 0) {
			return state
		} else {
			state.coords.y = state.coords.y - 1;
		}
	} else if (movement === 'right') {
		if (state.coords.y >= 8) {
			return state
		} else {
			state.coords.y = state.coords.y + 1;
		}
	} else if (movement === 'up') {
		if (state.coords.x <= 0) {
			return state
		} else {
			state.coords.x = state.coords.x - 1;
		}
	} else if (movement === 'down') {
		if (state.coords.x >= 40) {
			return state
		} else {
			state.coords.x = state.coords.x + 1;
		}
	} else {
		return state;
	}
	return state;
}

function checkForObject(board, state) {
	for (let i = 0, length = board.length; i < length; i++) {

		if (board[i].coords.x === state.coords.x && board[i].coords.y === state.coords.y) {
			if (board[i].health) {
				state.life += 25;
				board[i] = { coords: {x: board[i].coords.x, y: board[i].coords.y}, showing: false}
			} else if (board[i].weaponNumber) {
				state.weapon = weapons[board[i].weaponNumber];
			}
		}

	}
	return state
}
