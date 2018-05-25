import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { State } from '../store/types';
import { createHistoryEntriesSelector } from '../store/selectors';

interface Props {
    entries: number;
    history: State['history'];
}

const History: React.StatelessComponent<Props> = (
    {history}
) => (
    <ul className="history">
        {history.map((entry, index) =>
            <li key={history.length - index}>
                at {entry.time} value was {entry.value}
            </li>
        )}
    </ul>
);

export default connect<
    Pick<Props, 'history'>,
    null,
    Pick<Props, 'entries'>,
    State
>(
    () => createStructuredSelector({
        history: createHistoryEntriesSelector()
    })
)(History);
