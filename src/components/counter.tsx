import * as React from 'react';

export interface Props {
    initial?: number;
    increment?: number;
    decrement?: number;
}

export interface State {
    count: number;
}

export default class Counter extends React.Component<Props, State> {

    static defaultProps = {
        increment: 1,
        decrement: 1,
    };

    constructor({initial = 0}: Props) {
        super();
        this.state = {
            count: initial
        };
    }

    componentWillReceiveProps(props: Props) {
        this.setState({count: props.initial || 0});
    }
    
    render() {
        const {increment, decrement} = this.props;
        const {count} = this.state;
        return (
            <div>
                <button
                    onClick={this.handleDecrement}
                    value={decrement}
                >-{decrement}
                </button>
                count: {count}
                <button
                    onClick={this.handleIncrement}
                    value={increment}
                >+{increment}
                </button>
            </div>
        );
    }

    private handleDecrement: React.MouseEventHandler<HTMLButtonElement> = 
        e => this.setState({count: this.state.count - Number(e.currentTarget.value)})

    private handleIncrement: React.MouseEventHandler<HTMLButtonElement> = 
        e => this.setState({count: this.state.count + Number(e.currentTarget.value)})
}