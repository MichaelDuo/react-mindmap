import React, { PureComponent } from 'react';

export interface StateProps {
    mindmapId: string;
}

type Props = StateProps;

export default class Editor extends PureComponent<Props> {
    public render(): JSX.Element {
        return <div>Editor, {this.props.mindmapId}</div>;
    }
}
