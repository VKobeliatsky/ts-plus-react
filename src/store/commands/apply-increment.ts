import { Command } from '../types';
import { increase } from '../actions';
import { logCounterValue } from './log-counter-value';

export type ApplyIncrement = Command;

export const applyIncrement = (

): Command => async (dispatch, getState) => {
    const { increment } = getState();
    dispatch(increase(increment));
    dispatch(logCounterValue());
};
