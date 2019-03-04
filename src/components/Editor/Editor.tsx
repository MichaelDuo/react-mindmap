import React, { PureComponent } from 'react';

export interface StateProps {
    count: number;
}

export interface DispatchProps {
    increaseCount: () => void;
}

type Props = StateProps & DispatchProps;

export default class Editor extends PureComponent<Props> {
    public render(): JSX.Element {
        return (
            <div>
                <div>Editor, {this.props.count}</div>
                <button onClick={() => this.props.increaseCount()}>Test</button>
            </div>
        );
    }
}
