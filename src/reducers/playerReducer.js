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

	if (move === 'down') {
		let playerX = state.coords.x + 1
		let playerY = state.coords.y
		let boardNumber = (8 * playerX) + (playerX + playerY)

		if (board[boardNumber].enemyNumber) {
			return state;
		} else if (board[boardNumber].health || board[boardNumber].weaponNumber) {

			if (board[boardNumber].health) {
				state.life += 25
				board[boardNumber].health = false;
			} else {
				if (state.weapon.damage < weapons[board[boardNumber].weaponNumber].damage) {
					state.weapon = weapons[board[boardNumber].weaponNumber];
				}
				board[boardNumber].weaponNumber = false
			}

			changePosition(move, state)
		} else {
			changePosition(move, state)
		}
		window.scrollBy(0, 100)

	} else if (move === 'right') {
		let playerX = state.coords.x
		let playerY = state.coords.y + 1
		let boardNumber = (8 * playerX) + (playerX + playerY)

		if (board[boardNumber].enemyNumber) {
			return state;
		} else if (board[boardNumber].health || board[boardNumber].weaponNumber) {

			if (board[boardNumber].health) {
				state.life += 25
				board[boardNumber].health = false;
			} else {
				if (state.weapon.damage < weapons[board[boardNumber].weaponNumber].damage) {
					state.weapon = weapons[board[boardNumber].weaponNumber];
				}
				board[boardNumber].weaponNumber = false
			}

			changePosition(move, state)
		} else {
			changePosition(move, state)
		}

	} else if (move === 'up') {
		let playerX = state.coords.x - 1
		let playerY = state.coords.y
		let boardNumber = (8 * playerX) + (playerX + playerY)

		if (board[boardNumber].enemyNumber) {
			return state;
		} else if (board[boardNumber].health || board[boardNumber].weaponNumber) {

			if (board[boardNumber].health) {
				state.life += 25
				board[boardNumber].health = false;
			} else {
				if (state.weapon.damage < weapons[board[boardNumber].weaponNumber].damage) {
					state.weapon = weapons[board[boardNumber].weaponNumber];
				}
				board[boardNumber].weaponNumber = false
			}

			changePosition(move, state)
		} else {
			changePosition(move, state)
		}
		window.scrollBy(0, -100)

	} else if (move === 'left') {
		let playerX = state.coords.x
		let playerY = state.coords.y - 1
		let boardNumber = (8 * playerX) + (playerX + playerY)

		if (board[boardNumber].enemyNumber) {
			return state;
		} else if (board[boardNumber].health || board[boardNumber].weaponNumber) {

			if (board[boardNumber].health) {
				state.life += 25
				board[boardNumber].health = false;
			} else {
				if (state.weapon.damage < weapons[board[boardNumber].weaponNumber].damage) {
					state.weapon = weapons[board[boardNumber].weaponNumber];
				}
				board[boardNumber].weaponNumber = false
			}

			changePosition(move, state)
		} else {
			changePosition(move, state)
		}

	}

	return state
}
