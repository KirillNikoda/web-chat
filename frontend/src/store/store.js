import { combineReducers, createStore } from 'redux';
import { counterReducer } from './features/counter/reducer';

const overAllReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(overAllReducer);

export default store;
