import { CounterParametricSelecrtor } from './types';

export const createHistoryEntriesSelector = (
): CounterParametricSelecrtor<
    {entries: number},
    number[]
> => (
    state,
    {entries}
) => state.history.slice(0, entries);
