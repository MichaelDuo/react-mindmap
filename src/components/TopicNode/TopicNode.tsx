import React, { PureComponent } from 'react';
import { TopicNode as ITopicNode } from 'store/nodes/types';
export interface OwnProps {
    id: string;
}

export interface StateProps {
    node: ITopicNode;
}

type Props = OwnProps & StateProps;

export default class TopicNode extends PureComponent<Props> {
    public render(): JSX.Element {
        return <text>Node {this.props.node.properties.title}</text>;
    }
}
