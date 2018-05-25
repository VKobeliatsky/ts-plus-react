import { CounterAction } from '../types';

export type PushToHistory = CounterAction<
    'PUSH_TO_HISTORY',
    {value: number}
>;

export function pushToHistory(
    value: number
): PushToHistory {
    return { type: 'PUSH_TO_HISTORY', payload: {value} };
}
