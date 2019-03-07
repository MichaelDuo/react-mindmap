import React, { PureComponent } from 'react';
import { TopicNode as ITopicNode } from 'store/nodes/types';
export interface OwnProps {
    id: string;
}

export interface StateProps {
    node: ITopicNode;
}

type Props = OwnProps & StateProps;

export default class Node extends PureComponent<Props> {
    public render(): JSX.Element {
        return (
            <text x="0" y="15">
                Node {this.props.node.properties.title}
            </text>
        );
    }
}
