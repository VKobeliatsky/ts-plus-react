import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { counter, increment, decrement } from './reducers';
import { State } from './types';

export default createStore<State>(
    combineReducers({
        counter,
        increment,
        decrement
    }),
    applyMiddleware(thunk)
);
