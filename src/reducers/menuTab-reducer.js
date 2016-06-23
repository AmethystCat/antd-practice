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
			console.log(state);
			console.log(action);
			let arr,
				lastKey,
				delKey = action.tab.key;
			state.tabs.forEach((el, index) => {
				if (el === state.selectTab) {lastKey = index - 1;}
			});
			arr = state.tabs.filter(el => el!== delKey);
			if (lastKey >= 0 && state.selectTab === delKey) {
				return {...state, selectTab: state.tabs[lastKey], tabs: arr};
			}
			return {...state, tabs: arr};
		default:
			return state;
	}
}