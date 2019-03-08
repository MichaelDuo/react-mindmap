import React, { PureComponent } from 'react';
import { Node as INode } from 'store/nodes/types';
export interface OwnProps {
    id: string;
}

export interface StateProps {
    node: INode;
}

type Props = OwnProps & StateProps;

export default class Node extends PureComponent<Props> {
    public render(): JSX.Element {
        return <g transform={`translate(${0},${15})`}>{this.props.children}</g>;
    }
}
