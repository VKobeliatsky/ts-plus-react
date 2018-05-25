import { CounterAction } from '../types';

export type Decrease = CounterAction<
    'DECREASE',
    {value: number}
>;

export function decrease(
    value: number
): Decrease {
    return {type: 'DECREASE', payload: {value}};
}
