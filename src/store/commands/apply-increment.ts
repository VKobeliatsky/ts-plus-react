import { Command } from '../types';
import { increase } from '../actions';

export type ApplyIncrement = Command;

export const applyIncrement = (

): Command => async (dispatch, getState) => {
    const { increment } = getState();
    dispatch(increase(increment));
};
