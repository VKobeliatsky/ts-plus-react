import { ActionCreator } from 'redux';
import { Increment, Decrement } from './types';

export const increment: ActionCreator<Increment> = 
    (n: number = 1) => ({type: 'INCREMENT', increment: n});

export const decrement: ActionCreator<Decrement> = 
    (n: number = 1) => ({type: 'DECREMENT', decrement: n});
