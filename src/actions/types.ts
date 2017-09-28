import { Action } from 'redux';

export type ActionType 
    = 'INCREMENT' 
    | 'DECREMENT';

export interface CounterAction extends Action {
    type: ActionType;
}
