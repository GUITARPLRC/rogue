export default (state = [], action) => {
	switch(action.type) {
		case 'CHECK_FOR_OBJECT':
			return [
				...state
			]
		default:
			return state;
	}
};
