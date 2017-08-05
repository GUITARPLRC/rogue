export const player = {
	life: 100,
	weapon: 'Stick',
	damage: 2,
	experience: 0,
	level: 0,
	coords: {x:1, y:4}
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
for (let i = 0; i < 40; i++) {
	for (let j = 0; j < 9; j++) {
		board.push({ coords: {x:i, y:j}, showing:false })
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

export let health = { life: 25 }
