import * as React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

export interface Props {
    count: number;
    increment: number;
    decrement: number;
    onIncrement: (n: number) => void;
    onDecrement: (n: number) => void;
}

class Counter extends React.Component<Props> {
    render() {
        const { count } = this.props;

        return (
            <div>
                <button onClick={this.handleDecrement} >
                    -{decrement}
                </button>
                count: {count}
                <button onClick={this.handleIncrement} >
                    +{increment}
                </button>
            </div>        
        );
    }

    private handleDecrement = () => this.props.onDecrement(this.props.decrement);
    private handleIncrement = () => this.props.onIncrement(this.props.increment);
}

export default connect(
     count => ({count}),
     dispatch => ({
         onIncrement(n: number) { dispatch(increment(n)); },
         onDecrement(n: number) { dispatch(decrement(n)); }
     })
)(Counter);
