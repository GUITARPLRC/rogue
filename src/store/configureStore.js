import { createStore } from 'redux';

import rootReducer from '../reducers';

import { player, enemy, board } from '../data/index';

const defaultState = {
	player, enemy, board
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
