export default (state = [], action) => {
	let newState = JSON.parse(JSON.stringify(state));
	switch(action.type) {
		case 'BATTLE':
			return newState;
		case 'MOVE':
			return changePosition(action.value, newState);
		default:
			return newState;
	}
};

function changePosition(movement, state) {
	if (movement === 'left') {
		if (state.coords.y <= 0) {
			return state
		} else {
			state.coords.y = state.coords.y - 1;
		}
	} else if (movement === 'right') {
		if (state.coords.y >= 8) {
			return state
		} else {
			state.coords.y = state.coords.y + 1;
		}
	} else if (movement === 'up') {
		if (state.coords.x <= 0) {
			return state
		} else {
			state.coords.x = state.coords.x - 1;
		}
	} else if (movement === 'down') {
		if (state.coords.x >= 40) {
			return state
		} else {
			state.coords.x = state.coords.x + 1;
		}
	} else {
		return state;
	}
	return state;
}
