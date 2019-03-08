import React, { PureComponent } from 'react';
import TopicNode from 'components/TopicNode';
import Svg from 'components/Svg';

export interface StateProps {
    rootNodeId: string;
}

export interface DispatchProps {
    increaseCount: () => void;
}

type Props = StateProps & DispatchProps;

export default class Editor extends PureComponent<Props> {
    private getRootNode(): JSX.Element {
        return <TopicNode id={this.props.rootNodeId} />;
    }

    public render(): JSX.Element {
        return <Svg>{this.getRootNode()}</Svg>;
    }
}
