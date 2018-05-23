import { createStore, combineReducers } from 'redux';

import { counter } from './reducers';
import { State } from './types';

export default createStore<State>(
    combineReducers({counter})
);
