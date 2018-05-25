import { CounterAction } from '../types';

export type PushToHistory = CounterAction<
    'PUSH_TO_HISTORY',
    {time: string, value: number}
>;

export function pushToHistory(
    time: string,
    value: number
): PushToHistory {
    return { type: 'PUSH_TO_HISTORY', payload: {time, value} };
}
