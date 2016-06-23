import {MENU_CHANGE, TAB_ADD, TAB_REMOVE} from '../actions/types';

export function selectMenu(state = '', action) {
	if (action.type === MENU_CHANGE) return action.key;
	return state;
}

// export function selectTab(state = 'home', action) {
// 	if (action.type === TAB_CHANGE) return action.key;
// 	return state;
// }

export function tabState(state = {selectTab: 'home', tabs: ['home']}, action) {
	switch(action.type) {
		case TAB_ADD:
			// obj = {selectTab: 'xxx', key: 'xxx'}
			let obj = action.tab,
				flag = false;

			// 2
			state.tabs.forEach((el) => {
				if (el === obj.key) {flag = true;}
			});
			if (flag) return {...state, selectTab: obj.selectTab};

			// 1
			return {...state, selectTab: obj.selectTab, tabs: state.tabs.concat(obj.key)};

		case TAB_REMOVE:
			return state.map((el) => {
				if(el !== action.key) return el;
			});
		default:
			return state;
	}
}