import * as React from 'react';

export interface Props {
    initial?: number;
}

export interface State {
    count: number;
}

export default class Counter extends React.Component<Props, State> {
    static defaultProps = {
        initial: 0
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            count: props.initial!
        };
    }

    componentWillReceiveProps(props: Props) {
        this.setState({count: props.initial!});
    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
                <p>
                    <button onClick={this.handleDecrement}>
                    decrease
                    </button>
                </p>
                <h2>count: {count}</h2>
                <p>
                    <button onClick={this.handleIncrement} >
                    increase
                    </button>
                </p>
            </div>
        );
    }

    private handleDecrement = () => this.setState({count: this.state.count - 1});
    private handleIncrement = () => this.setState({count: this.state.count + 1});
}