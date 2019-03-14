import React, { PureComponent } from 'react';
import { Node as INode } from 'store/nodes/types';
export interface OwnProps {
    id: string;
}

export interface StateProps {
    node: INode;
}

export interface DispatchProps {
    displayNodes: (ids: string[]) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

export default class Node extends PureComponent<Props> {
    public componentDidMount() {
        // push nodes to editor store
        this.props.displayNodes(['nodeid']);
    }

    public render() {
        return <g transform={`translate(${0},${15})`}>{this.props.children}</g>;
    }
}
