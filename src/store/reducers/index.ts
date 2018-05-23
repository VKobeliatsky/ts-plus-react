import { Reducer } from 'redux';
import { Action } from '../actions';

export const counter: Reducer<number> = (state = 0, action: Action) => {
    switch (action.type) {
      case 'INCREASE':
        return state + action.increment;
      case 'DECREASE':
        return state - action.decrement;
      default:
        return state;
    }
  };
