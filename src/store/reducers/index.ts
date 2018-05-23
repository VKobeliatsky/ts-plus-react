import { Reducer } from 'redux';

import { Action } from '../actions';
import { State } from '../types';

export const counter: Reducer<State['count']> = (state = 0, action: Action) => {
    switch (action.type) {
      case 'INCREASE':
        return state + action.increment;
      case 'DECREASE':
        return state - action.decrement;
      default:
        return state;
    }
  };
