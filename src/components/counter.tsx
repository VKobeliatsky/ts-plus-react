import * as React from 'react';
import { connect } from 'react-redux';

import { State } from '../store/types';
import {
    setIncrement,
    setDecrement
} from '../store/actions';
import {
    applyDecrement,
    applyIncrement
} from '../store/commands';

export interface Props {
    counter: number;
    increment: number;
    decrement: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onIncrementChange: React.ChangeEventHandler<HTMLInputElement>;
    onDecrementChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Counter: React.StatelessComponent<Props> = ({
    counter,
    increment,
    decrement,
    onIncrement,
    onDecrement,
    onIncrementChange,
    onDecrementChange
}) => (
    <div>
        <p>
            <button onClick={onDecrement} >
                decrease by
            </button>
            <input
                type="number"
                value={decrement}
                min={0}
                onChange={onDecrementChange}
            />
        </p>
        <h2>count: {counter}</h2>
        <p>
            <button onClick={onIncrement} >
                increase by
            </button>
            <input
                type="number"
                min={0}
                value={increment}
                onChange={onIncrementChange}
            />
        </p>
    </div>    
);

export default connect<
    Pick<Props
        , 'counter'
        | 'increment'
        | 'decrement'
    >,
    Pick<Props
        , 'onIncrement'
        | 'onIncrementChange'
        | 'onDecrement'
        | 'onDecrementChange'
    >,
    {},
    State
>(
    ({counter, increment, decrement}) => ({
         counter,
         increment,
         decrement
    }),
    (dispatch) => ({
         onIncrement: () => dispatch(applyIncrement()),
         onIncrementChange: e => dispatch(setIncrement(Number(e.currentTarget.value))),
         onDecrement: () => dispatch(applyDecrement()),
         onDecrementChange: e => dispatch(setDecrement(Number(e.currentTarget.value)))
    })
)(Counter);
