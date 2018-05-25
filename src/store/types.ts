import { ThunkAction } from 'redux-thunk';
import { Selector, ParametricSelector } from 'reselect';

export type State = {
    counter: number,
    increment: number,
    decrement: number,
    history: number[]
};

export type CounterAction<
    T extends string, P
> = {type: T} & (
    P extends Error ? {error: P} :
    P extends NonNullable<P> ? {payload: P} :
    {}
);

export type Command<T = void> = ThunkAction<Promise<T>, State, null>;

export type CounterSelecrtor<R> = Selector<State, R>;
export type CounterParametricSelecrtor<P, R> = ParametricSelector<State, P, R>;
