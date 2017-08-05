import { combineReducers } from 'redux';

import player from './playerReducer';
import enemy from './enemyReducer';

const rootReducer = combineReducers({player, enemy});

export default rootReducer;
