import React, { PureComponent } from 'react';

export interface OwnProps {
    id: string;
}

export interface StateProps {
    properties: object;
}

type Props = OwnProps & StateProps;

export default class Node extends PureComponent<Props> {
    public render(): JSX.Element {
        return <div>Node {this.props.id}</div>;
    }
}
