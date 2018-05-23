import * as React from 'react';
import { connect } from 'react-redux';

import { State } from '../store/types';
import { increase, decrease } from '../store/actions';

export interface Props {
    counter: number;
    increment: number;
    decrement: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const Counter: React.StatelessComponent<Props> = ({
    counter,
    increment,
    decrement,
    onIncrement,
    onDecrement
}) => (
    <div>
        <p>
            <button onClick={onDecrement} >
                decrease by {decrement}
            </button>
        </p>
        <h2>count: {counter}</h2>
        <p>
            <button onClick={onIncrement} >
                increase by {increment}
            </button>
        </p>
    </div>    
);

export default connect<
    Pick<Props, 'counter'>,
    Pick<Props, 'onIncrement' | 'onDecrement'>,
    Pick<Props, 'increment' | 'decrement'>,
    State
>(
     ({counter}) => ({counter}),
     (dispatch, {increment, decrement}) => ({
         onIncrement() { dispatch(increase(increment)); },
         onDecrement() { dispatch(decrease(decrement)); }
     })
)(Counter);
