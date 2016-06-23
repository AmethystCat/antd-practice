import * as action from './types';
// action creator
export function menuChange(key) {
	return {
		type: action.MENU_CHANGE,
		key
	};
}

export function tabRemove(tab) {
	return {
		type: action.TAB_REMOVE,
		tab
	};
}

export function tabAdd(tab) {
	return {
		type: action.TAB_ADD,
		tab
	};
}