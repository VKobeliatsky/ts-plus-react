import * as React from 'react';

export interface Props {
    initial?: number;
}

export interface State {
    count: number;
}

export default class Counter extends React.Component<Props, State> {
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
        const {count} = this.state;
        return (
            <div>
                <button
                    onClick={this.handleDecrement}
                >-
                </button>
                count: {count}
                <button
                    onClick={this.handleIncrement}
                >+
                </button>
            </div>
        );
    }

    private handleDecrement = () => this.setState({count: this.state.count - 1});
    private handleIncrement = () => this.setState({count: this.state.count + 1});
}