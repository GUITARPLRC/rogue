// Player State

import { weapons, enemy } from '../data/index';

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

//TODO fix board edges detect and add battle mode!!

function checkForObject(board, move, state) {

	if (move === 'down') {
		let playerX = state.coords.x + 1
		let playerY = state.coords.y
		let boardNumber = (8 * playerX) + (playerX + playerY)

		if (playerX > 39) {
			return state;
		}

		if (board[boardNumber].enemyNumber && board[boardNumber].enemyNumber !== '') {
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

		if (playerY > 8) {
			return state;
		}

		if (board[boardNumber].enemyNumber && board[boardNumber].enemyNumber !== '') {
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

		if (playerX < 0) {
			return state
		}

		if (board[boardNumber].enemyNumber && board[boardNumber].enemyNumber !== '') {
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

		if (playerY < 0) {
			return state;
		}

		if (board[boardNumber].enemyNumber && board[boardNumber].enemyNumber !== '') {
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



	} else if (move === 'space') {
		let boardNumber = (8 * state.coords.x) + (state.coords.x + state.coords.y)
		let boardUp = boardNumber - 9
		let boardDown = boardNumber + 9
		let boardLeft = boardNumber - 1
		let boardRight = boardNumber + 1
		let enemyObj = ''
		let whichEnemy = ''

		if (board[boardDown].enemyNumber) {
			enemyObj = enemy[board[boardDown].enemyNumber]
			whichEnemy = boardDown
		} else if (board[boardRight].enemyNumber) {
			enemyObj = enemy[board[boardRight].enemyNumber]
			whichEnemy = boardRight
		} else if (board[boardLeft].enemyNumber) {
			enemyObj = enemy[board[boardLeft].enemyNumber]
			whichEnemy = boardLeft
		} else if (board[boardUp].enemyNumber) {
			enemyObj = enemy[board[boardUp].enemyNumber]
			whichEnemy = boardUp
		}

		enemyObj.life = enemyObj.life - state.weapon.damage;
		state.life = state.life - enemyObj.damage
		if (enemyObj.life <= 0) {
			enemyObj.alive = false;
			board[whichEnemy].enemyNumber = ''
			state.experience += enemyObj.experience
			while (state.experience > 20) {
				state.level += 1
				state.health += 10
				state.experience -= 20
			}
		}
		if (state.life <= 0) {
			document.write('You have died....')
		}
		console.log(enemyObj)
	} else {
		changePosition(move, state)
	}

	return state
}
