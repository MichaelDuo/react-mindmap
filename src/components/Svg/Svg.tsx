import React, { PureComponent } from 'react';

export default class Editor extends PureComponent<{}> {
    public render(): JSX.Element {
        return <div>{this.props.children}</div>;
    }
}
