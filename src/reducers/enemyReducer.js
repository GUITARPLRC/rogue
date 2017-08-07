// Enemy State

export default (state = [], action) => {
	switch(action.type) {
		case 'BATTLE':
			return [
				...state
			]
		default:
			return state;
	}
};
