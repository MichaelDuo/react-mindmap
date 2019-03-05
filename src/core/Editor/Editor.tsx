import React, { PureComponent } from 'react';
import Node from 'components/Node';
import Svg from 'components/Svg';

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
            <Svg>
                <Node id={this.props.rootNodeId} />
            </Svg>
        );
    }
}
