import {MENU_CHANGE, TAB_ADD, TAB_REMOVE} from '../actions/types';

export default function tabState(state = {selectMenu: '', selectTab: 'home', tabs: ['home']}, action) {
	switch(action.type) {
		case MENU_CHANGE:
			return {...state, selectMenu: action.key};
		case TAB_ADD:
			// obj = {selectTab: 'xxx', key: 'xxx'}
			let obj = action.tab,
				flag = false;

			// 1 tab is exist
			state.tabs.forEach((el) => {
				if (el === obj.key) {flag = true;}
			});
			if (flag) return {...state, selectMenu: obj.selectTab, selectTab: obj.selectTab};

			// 2
			return {...state, selectMenu: obj.selectTab, selectTab: obj.selectTab, tabs: state.tabs.concat(obj.key)};

		case TAB_REMOVE:
			let arr,
				lastKey,
				delKey = action.tab.key;
			state.tabs.forEach((el, index) => {
				if (el === state.selectTab) {lastKey = index - 1;}
			});
			arr = state.tabs.filter(el => el!== delKey);
			if (lastKey >= 0 && state.selectTab === delKey) {
				return {
					...state, 
					selectMenu: (state.tabs[lastKey] === 'home') ? '' : state.tabs[lastKey], 
					selectTab: state.tabs[lastKey], 
					tabs: arr
				};
			}
			return {...state, tabs: arr};
		default:
			return state;
	}
}