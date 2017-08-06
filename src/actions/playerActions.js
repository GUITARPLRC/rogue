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
