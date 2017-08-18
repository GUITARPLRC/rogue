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

//TODO make damage random

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

		if (state.coords.x + 1 <= 39 && (board[boardDown].enemyNumber && board[boardDown].enemyNumber !== '')) {
				enemyObj = enemy[board[boardDown].enemyNumber]
				whichEnemy = boardDown
		} else if (state.coords.y + 1 <= 8 && (board[boardRight].enemyNumber && board[boardRight].enemyNumber !== '')) {
				enemyObj = enemy[board[boardRight].enemyNumber]
				whichEnemy = boardRight
		} else if (state.coords.y - 1 >= 0 && (board[boardLeft].enemyNumber && board[boardLeft].enemyNumber !== '')) {
				enemyObj = enemy[board[boardLeft].enemyNumber]
				whichEnemy = boardLeft
		} else if (state.coords.x - 1 >= 0 && (board[boardUp].enemyNumber && board[boardUp].enemyNumber !== '')) {
				enemyObj = enemy[board[boardUp].enemyNumber]
				whichEnemy = boardUp
		} else {
			return state
		}

		if (enemyObj !== '' && enemyObj.alive !== false) {

			let playerDamage = Math.floor(Math.random() * state.weapon.damage) + 2
			let enemyDamage = Math.floor(Math.random() * enemyObj.damage) + 1

			enemyObj.life = enemyObj.life - playerDamage
			state.life = state.life - enemyDamage
			if (enemyObj.life <= 0) {
				enemyObj.alive = false;
				board[whichEnemy].enemyNumber = ''

				let howManyLeft = 0;
				for (let i = 0; i < board.length; i++) {
					if (board[i].enemyNumber && board[i].enemyNumber !== '') {
						howManyLeft += 1;
					}
				}
				if (howManyLeft === 0) {
					document.write('Congratulations! You have defeated all the enemies in the dungeon!')
					setTimeout(() => window.location.reload(), 4000)
				}

				state.experience += enemyObj.experience
				while (state.experience > 20) {
					state.level += 1
					state.health += 10
					state.experience -= 20
					state.weapon.damage += 2
				}
			}
			if (state.life <= 0) {
				document.write('Sorry, you have died....')
				setTimeout(() => window.location.reload(), 3500)
			}
		}

	} else {
		changePosition(move, state)
	}

	return state
}
