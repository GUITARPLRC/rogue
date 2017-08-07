export const battle = () => {
	return {
		type: 'BATTLE'
	}
};

export const move = (value) => {
	return {
		type: 'MOVE',
		value
	}
};

export const checkObjects = (board) => {
	return {
		type: 'CHECK_OBJECTS',
		board
	}
};
