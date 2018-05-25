import { Command } from '../types';
import { pushToHistory } from '../actions';

export type LogCounterValue = Command;

export const logCounterValue = (

): Command => async (dispatch, getState, {getTime}) => {
    const { counter } = getState();
    const time = getTime();
    dispatch(pushToHistory(time, counter));
};
