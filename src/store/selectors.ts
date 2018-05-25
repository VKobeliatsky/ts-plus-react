import { CounterParametricSelecrtor, HistoryEntry } from './types';

export const createHistoryEntriesSelector = (
): CounterParametricSelecrtor<
    {entries: number},
    HistoryEntry[]
> => (
    state,
    {entries}
) => state.history.slice(0, entries);
