import { createStore } from 'redux';
import rootReducer from '../reducers/main';
import state from './state';

let store = createStore(rootReducer, state);
console.log(store.getState());
export default store;