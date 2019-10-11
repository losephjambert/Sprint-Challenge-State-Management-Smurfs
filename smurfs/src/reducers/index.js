import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import smurfs from './smurfs.reducer';

const rootReducer = combineReducers({
  smurfs,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
