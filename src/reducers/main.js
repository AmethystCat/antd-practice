import {selectMenu, tabState} from './menuTab-reducer';
import { combineReducers } from 'redux';
let rootReducer = combineReducers({
	selectMenu,
	tabState,
	tabs: (state = []) => state
});

export default rootReducer;