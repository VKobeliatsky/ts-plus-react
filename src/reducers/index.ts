import { Reducer } from 'redux';
import { CounterAction } from '../actions/types';

export const counter: Reducer<number> = 
  (state = 0, action: CounterAction) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };
