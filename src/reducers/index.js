import { combineReducers } from 'redux';

import player from './playerReducer';
import enemy from './enemyReducer';
import board from './boardReducer';

const rootReducer = combineReducers({player, enemy, board});

export default rootReducer;
