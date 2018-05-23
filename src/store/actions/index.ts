import { ActionCreator } from 'redux';
import { CounterAction } from './types';

export const increment: ActionCreator<CounterAction> = 
    () => ({type: 'INCREMENT'});
export const decrement: ActionCreator<CounterAction> = 
    () => ({type: 'DECREMENT'});
