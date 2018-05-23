import * as React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../store/actions';

export interface Props {
    count: number;
    increment: number;
    decrement: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const Counter: React.StatelessComponent<Props> = ({
    count,
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
        <h2>count: {count}</h2>
        <p>
            <button onClick={onIncrement} >
                increase by {increment}
            </button>
        </p>
    </div>    
);

export default connect<
    Pick<Props, 'count'>,
    Pick<Props, 'onIncrement' | 'onDecrement'>,
    Pick<Props, 'increment' | 'decrement'>
>(
     count => ({count}),
     (dispatch, {increment, decrement}) => ({
         onIncrement() { dispatch(increase(increment)); },
         onDecrement() { dispatch(decrease(decrement)); }
     })
)(Counter);
