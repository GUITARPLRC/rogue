export const player = {
	life: 100,
	weapon: {
		name: 'Stick',
		damage: 2
	},
	experience: 0,
	level: 0,
	coords: {x:0, y:4}
}

export const enemy = [
	{
		id: 0,
		life: 20,
		damage: 2,
		experience: 5,
		alive: true
	},
	{
		id: 1,
		life: 20,
		damage: 3,
		experience: 10,
		alive: true
	},
	{
		id: 2,
		life: 25,
		damage: 5,
		experience: 15,
		alive: true
	},
	{
		id: 3,
		life: 30,
		damage:3,
		experience: 20,
		alive: true
	},
	{
		id: 4,
		life:100,
		damage: 10,
		experience: 50,
		alive: true
	}
]

export let board = [];

let weaponNumber = 0;
let enemyNumber = 0;
let health = 0

for (let i = 0; i < 40; i++) {
	for (let j = 0; j < 9; j++) {

		let number = Math.random();
		if (i > 12) {
			if (number > 0.98) {
				if (health < 3) {
					board.push({ coords: {x:i, y:j}, showing:false, health:true })
					health++
				} else {
					board.push({ coords: {x:i, y:j}, showing:false })
				}
			} else if (number > 0.95) {
				if (enemyNumber < 5) {
					board.push({ coords: {x:i, y:j}, showing:false, enemyNumber:enemyNumber })
					enemyNumber++;
				} else {
					board.push({ coords: {x:i, y:j}, showing:false })
				}
			} else if (number > 0.88){
				if (weaponNumber < 3) {
					board.push({ coords: {x:i, y:j}, showing:false, weaponNumber:weaponNumber })
					weaponNumber++;
				} else {
					board.push({ coords: {x:i, y:j}, showing:false })
				}
			} else {
				board.push({ coords: {x:i, y:j}, showing:false })
			}
		} else {
			board.push({ coords: {x:i, y:j}, showing:false })
		}

	}
}

export let weapons = [
	{
		name: 'Axe',
		damage: 5
	},
	{
		name: 'Katana',
		damage: 7
	},
	{
		name: 'Machine Gun',
		damage: 10
	}
]
