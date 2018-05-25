import * as React from 'react';
import { connect } from 'react-redux';

import { State } from '../store/types';

interface Props {
    history: number[];
}

const History: React.StatelessComponent<Props> = (
    {history}
) => (
    <ul>
        {history.map(
            (value, index) => <li key={history.length - index}>
                {value}
            </li>
        )}
    </ul>
);

export default connect<
    Pick<Props, 'history'>,
    null, null,
    State
>(
    ({history}) => ({history})
)(History);
