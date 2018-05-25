import { Command } from '../types';
import { pushToHistory } from '../actions';

export type LogCounterValue = Command;

export const logCounterValue = (

): Command => async (dispatch, getState) => {
    const { counter } = getState();
    dispatch(pushToHistory(counter));
};
