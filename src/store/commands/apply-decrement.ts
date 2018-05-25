import { Command } from '../types';
import { decrease } from '../actions';
import { logCounterValue } from './log-counter-value';

export type ApplyDecrement = Command;

export const applyDecrement = (

): Command => async (dispatch, getState) => {
    const { decrement } = getState();
    dispatch(decrease(decrement));
    dispatch(logCounterValue());
};
