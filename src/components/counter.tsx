import * as React from 'react';

export interface Props {
    initial?: number;
}

export interface State {
    count: number;
    increment: number;
    decrement: number;
}

export default class Counter extends React.Component<Props, State> {

    static defaultProps = {
        initial: 0
    };

    constructor({initial}: Props) {
        super();
        this.state = {
            count: initial!,
            increment: 1,
            decrement: 1
        };
    }

    componentWillReceiveProps(props: Props) {
        this.setState({count: props.initial!});
    }
    
    render() {
        const {count, increment, decrement} = this.state;
        return (
            <div>
                <p>
                    <button onClick={this.handleDecrement}>
                        decrease by
                    </button>
                    <input
                        type="number"
                        value={String(decrement)}
                        min={0}
                        onChange={this.handleDecrementChange}
                    />
                </p>
                <h2>count: {count}</h2>
                <p>
                    <button onClick={this.handleIncrement}>
                        increase by
                    </button>
                    <input
                        type="number"
                        value={String(increment)}
                        min={0}
                        onChange={this.handleIncrementChange}
                    />
                </p>
            </div>
        );
    }

    private handleDecrement = () =>
        this.setState({count: this.state.count - this.state.decrement})

    private handleDecrementChange: React.ChangeEventHandler<HTMLInputElement> =
        e => this.setState({decrement: Number(e.currentTarget.value)})

    private handleIncrement = () =>
        this.setState({count: this.state.count + this.state.increment})

    private handleIncrementChange: React.ChangeEventHandler<HTMLInputElement> =
        e => this.setState({increment: Number(e.currentTarget.value)})

}