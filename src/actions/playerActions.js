export const checkObjects = (board, move) => {
	return {
		type: 'CHECK_OBJECTS',
		board,
		move
	}
};
