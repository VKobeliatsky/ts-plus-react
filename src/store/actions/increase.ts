import { CounterAction } from '../types';

export type Increase = CounterAction<
    'INCREASE',
    {value: number}
>;
// {
//     type: 'INCREASE',
//     increment: number
// };

export function increase(
    value: number
): Increase {
    return {type: 'INCREASE', payload: {value}};
}
