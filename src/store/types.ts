import { ThunkAction } from 'redux-thunk';
import { Selector, ParametricSelector } from 'reselect';
import { Services } from './services';

export type State = {
    counter: number,
    increment: number,
    decrement: number,
    history: HistoryEntry[]
};

export type HistoryEntry = {time: string, value: number};

export type CounterAction<
    T extends string, P
> = {type: T} & (
    P extends Error ? {error: P} :
    P extends NonNullable<P> ? {payload: P} :
    {}
);

export type Command<T = void> = ThunkAction<Promise<T>, State, Services>;

export type CounterSelecrtor<R> = Selector<State, R>;
export type CounterParametricSelecrtor<P, R> = ParametricSelector<State, P, R>;
