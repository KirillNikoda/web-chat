import { combineReducers, createStore } from 'redux';
import { counterReducer } from './features/counter/reducer';

const rootReducer = combineReducers({
  counterState: counterReducer,
});

const store = createStore(rootReducer);

export default store;
