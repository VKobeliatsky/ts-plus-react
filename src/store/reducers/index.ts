import { Reducer } from 'redux';

import { Action } from '../actions';
import { State } from '../types';

export const counter: Reducer<State['counter']> = (
    state = 0,
    action: Action
) => {
    switch (action.type) {
      case 'INCREASE':
        return state + action.increment;
      case 'DECREASE':
        return state - action.decrement;
      default:
        return state;
    }
};

export const increment: Reducer<State['increment']> = (
    state = 1,
    action: Action
) => {
    switch (action.type) {
        case 'SET_INCREMENT':
            return action.value;
        default:
            return state;
    }
};

export const decrement: Reducer<State['decrement']> = (
    state = 1,
    action: Action
) => {
    switch (action.type) {
        case 'SET_DECREMENT':
            return action.value;
        default:
            return state;
    }
};