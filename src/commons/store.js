import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import Home from '../reducers/Home';

const rootReducer = combineReducers({
  home: Home
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
