import * as React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

export interface Props {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

class Counter extends React.Component<Props> {
    render() {
        const {
            count,
            onDecrement,
            onIncrement
        } = this.props;

        return (
            <div>
                <p>
                    <button onClick={onDecrement}>
                    increase
                    </button>
                </p>
                <h2>count: {count}</h2>
                <p>
                    <button onClick={onIncrement}>
                    decrease
                    </button>
                </p>
            </div>        
        );
    }
}

export default connect(
     count => ({count}),
     dispatch => ({
         onIncrement() { 
            dispatch(increment()); 
        },
        onDecrement: () => {
            dispatch(decrement());
        }
     })
)(Counter);
