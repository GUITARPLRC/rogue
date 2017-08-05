import { createStore } from 'redux';

import rootReducer from '../reducers';

import { player, enemy } from '../data/index';

const defaultState = {
	player, enemy
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
