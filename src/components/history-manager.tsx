import * as React from 'react';
import History from './history';

interface Props {
    entries: number;
}

interface State {
    entries: number;
}

export default class HistoryManager extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            entries: props.entries
        };
    }

    render() {
        const {entries} = this.state;

        return (
            <div className="history-manager">
                <p>
                    show
                    <input
                        type="number"
                        min={0}
                        value={entries}
                        onChange={this.onEntriesChange}
                    />
                    entries
                </p>
                <History entries={entries} />
        </div>);
    }

    onEntriesChange: React.ChangeEventHandler<HTMLInputElement> =
        e => this.setState({entries: Number(e.currentTarget.value)})
}