import React, { PureComponent } from 'react';
import Node from 'components/Node';

export interface StateProps {
    rootNodeId: string;
}

export interface DispatchProps {
    increaseCount: () => void;
}

type Props = StateProps & DispatchProps;

export default class Editor extends PureComponent<Props> {
    public render(): JSX.Element {
        return (
            <div>
                <Node id={this.props.rootNodeId} />
            </div>
        );
    }
}
