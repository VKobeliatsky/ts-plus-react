import { Reducer } from 'redux';
import { CounterAction } from '../actions/types';

export const counter: Reducer<number> = (state = 0, action: CounterAction) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.increment;
      case 'DECREMENT':
        return state - action.decrement;
      default:
        return state;
    }
  };
