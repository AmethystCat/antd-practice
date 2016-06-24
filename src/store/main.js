import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/main';
import state from './state';

function logger({ getState }) {
	return (next) => (action) => {
		next(action);
		console.log('logger: ', getState());
	};
}

let createStoreWithMiddleware = applyMiddleware(logger)(createStore);
let store = createStoreWithMiddleware(rootReducer, state);
export default store;