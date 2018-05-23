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
                <p>
                    <button onClick={this.handleDecrement} >
                        -{decrement}
                    </button>
                </p>
                <h2>count: {count}</h2>
                <p>
                    <button onClick={this.handleIncrement} >
                        +{increment}
                    </button>
                </p>
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
