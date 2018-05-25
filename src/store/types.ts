import { ThunkAction } from 'redux-thunk';

export type State = {
    counter: number,
    increment: number,
    decrement: number
};

export type Command<T = void> = ThunkAction<Promise<T>, State, null>;
