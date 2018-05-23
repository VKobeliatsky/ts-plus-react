import * as React from 'react';

export interface Props {
    initial?: number;
    increment?: number;
    decrement?: number;
}

export interface State {
    count: number;
    increment: number;
    decrement: number;
}

export default class Counter extends React.Component<Props, State> {

    static defaultProps = {
        initial: 0,
        increment: 1,
        decrement: 1,
    };

    constructor({initial, increment, decrement}: Props) {
        super();
        this.state = {
            count: initial!,
            increment: increment!,
            decrement: decrement!
        };
    }

    componentWillReceiveProps(props: Props) {
        this.setState({
            count: props.initial!,
            increment: props.increment!,
            decrement: props.decrement!
        });
    }
    
    render() {
        const {count, increment, decrement} = this.state;
        return (
            <div>
                <button onClick={this.handleDecrement}>
                    increase by
                </button>
                <input
                    type="number"
                    value={String(decrement)}
                    min={0}
                    onChange={this.handleDecrementChange}
                />
                count: {count}
                <button onClick={this.handleIncrement}>
                    decrease by
                </button>
                <input
                    type="number"
                    value={String(increment)}
                    min={0}
                    onChange={this.handleIncrementChange}
                />
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