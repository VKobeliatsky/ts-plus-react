import { Command } from '../types';
import { decrease } from '../actions';

export type ApplyDecrement = Command;

export const applyDecrement = (

): Command => async (dispatch, getState) => {
    const { decrement } = getState();
    dispatch(decrease(decrement));
};
