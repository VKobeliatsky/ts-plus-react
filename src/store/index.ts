import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { counter, increment, decrement, history } from './reducers';
import { State } from './types';

export default createStore<State>(
    combineReducers({
        counter,
        increment,
        decrement,
        history
    }),
    applyMiddleware(thunk)
);
