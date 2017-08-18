// Player State

import { weapons } from '../data/index';

export default (state = [], action) => {
	let newState = JSON.parse(JSON.stringify(state));
	switch(action.type) {
		case 'CHECK_OBJECTS':
			return checkForObject(action.board, action.move, newState);
		default:
			return newState;
	}
};

function changePosition(movement, state) {
	if (movement === 'left') {
		if (state.coords.y === 0) {
			return state
		} else {
			state.coords.y = state.coords.y - 1;
		}
	} else if (movement === 'right') {
		if (state.coords.y === 8) {
			return state
		} else {
			state.coords.y = state.coords.y + 1;
		}
	} else if (movement === 'up') {
		if (state.coords.x === 0) {
			return state
		} else {
			state.coords.x = state.coords.x - 1;
		}
	} else if (movement === 'down') {
		if (state.coords.x === 39) {
			return state
		} else {
			state.coords.x = state.coords.x + 1;
		}
	} else {
		return state;
	}
	return state;
}

//TODO check upcoming player position for enemy

function checkForObject(board, move, state) {
	let playerX = state.coords.x
	let playerY = state.coords.y
	if (move === 'down') {
		playerY = playerY + 1
		for (let i = 0, length = board.length; i < length; i++) {
			if (board[i].coords.x === state.coords.x && board[i].coords.y === state.coords.y) {
				if (board[i].health) {
					window.scrollBy(0,100)
					state.life += 25;
					board[i] = { coords: {x: board[i].coords.x, y: board[i].coords.y}, showing: false}
					changePosition(move, state)
					break
				} else if (board[i].weaponNumber) {
					window.scrollBy(0,100)
					if (state.weapon.damage < weapons[board[i].weaponNumber].damage) {
						state.weapon = weapons[board[i].weaponNumber];
					}
					board[i] = { coords: {x: board[i].coords.x, y: board[i].coords.y}, showing: false}
					changePosition(move, state)
					break
				} else if (board[playerY].enemyNumber) {
					return state
				} else {
					changePosition(move, state)
					window.scrollBy(0,100)
					return state
				}
			}
		}
		return state
	} else if (move === 'right') {
		playerX = playerX + 1
		for (let i = 0, length = board.length; i < length; i++) {
			if (board[i].coords.x === state.coords.x && board[i].coords.y === state.coords.y) {
				if (board[i].health) {
					state.life += 25;
					board[i] = { coords: {x: board[i].coords.x, y: board[i].coords.y}, showing: false}
					changePosition(move, state)
					break;
				} else if (board[i].weaponNumber) {
					if (state.weapon.damage < weapons[board[i].weaponNumber].damage) {
						state.weapon = weapons[board[i].weaponNumber];
					}
					board[i] = { coords: {x: board[i].coords.x, y: board[i].coords.y}, showing: false}
					changePosition(move, state)
					break;
				} else if (board[playerX].enemyNumber) {
					return state
				} else {
					changePosition(move, state)
					return state
				}
			}
		}
		return state;
	} else if (move === 'up') {
		playerY = playerY - 1
		for (let i = 0, length = board.length; i < length; i++) {
			if (board[i].coords.x === state.coords.x && board[i].coords.y === state.coords.y) {
				if (board[i].health) {
					window.scrollBy(0,-100)
					state.life += 25;
					board[i] = { coords: {x: board[i].coords.x, y: board[i].coords.y}, showing: false}
					changePosition(move, state)
					break
				} else if (board[i].weaponNumber) {
					window.scrollBy(0,-100)
					if (state.weapon.damage < weapons[board[i].weaponNumber].damage) {
						state.weapon = weapons[board[i].weaponNumber];
					}
					board[i] = { coords: {x: board[i].coords.x, y: board[i].coords.y}, showing: false}
					changePosition(move, state)
					break
				} else if (board[i].enemyNumber) {
					return state
				} else {
					changePosition(move, state)
					window.scrollBy(0,-100)
					return state
				}
			}
		}
		return state;
	} else if (move === 'left') {
		playerX = playerX - 1
		for (let i = 0, length = board.length; i < length; i++) {
			if (board[i].coords.x === state.coords.x && board[i].coords.y === state.coords.y) {
				if (board[i].health) {
					state.life += 25;
					board[i] = { coords: {x: board[i].coords.x, y: board[i].coords.y}, showing: false}
					changePosition(move, state)
					break;
				} else if (board[i].weaponNumber) {
					window.scrollBy(0,100)
					if (state.weapon.damage < weapons[board[i].weaponNumber].damage) {
						state.weapon = weapons[board[i].weaponNumber];
					}
					board[i] = { coords: {x: board[i].coords.x, y: board[i].coords.y}, showing: false}
					changePosition(move, state)
					break
				} else if (board[i].enemyNumber) {
					return state
				} else {
					changePosition(move, state)
					return state
				}
			}
		}
		return state
	} else if (move === 'space') {

	} else {
		return state
	}

	return state
}
