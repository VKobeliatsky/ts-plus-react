import * as React from 'react';
import { connect } from 'react-redux';

export interface Props {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

class Counter extends React.Component<Props> {
    render() {
        const {count, onDecrement, onIncrement} = this.props;

        return (
            <div>
                <button
                    onClick={onDecrement}
                >-
                </button>
                count: {count}
                <button
                    onClick={onIncrement}
                >+
                </button>
            </div>        
        );
    }
}

export default connect(
     count => ({count}),
     dispatch => ({
         onIncrement() { dispatch({type: 'INCREMENT'}); },
         onDecrement: () => { dispatch({type: 'DECREMENT'}); }
     })
)(Counter);
