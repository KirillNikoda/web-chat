import { combineReducers, createStore } from 'redux';
import { counterReducer } from './features/counter/reducer';

const overAllReducer = combineReducers({
  counterState: counterReducer,
});

const store = createStore(overAllReducer);

export default store;
