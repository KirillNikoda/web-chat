import authReducer from 'modules/auth/store/reducer';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  authState: authReducer,
});

const store = createStore(rootReducer);

export default store;
