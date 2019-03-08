import React, { Component } from 'react';
import Node, { StateProps, OwnProps } from './Node';
import { connect, ConnectedComponentClass } from 'react-redux';
import { AppState } from 'store';

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
    return {
        node: state.nodes[ownProps.id],
    };
};

export default function NodeHoc(
    BaseComponent: React.ComponentClass
): ConnectedComponentClass<typeof Component, OwnProps> {
    class Test extends React.PureComponent<OwnProps & StateProps> {
        public render(): JSX.Element {
            return (
                <Node {...this.props}>
                    <BaseComponent {...this.props} />
                </Node>
            );
        }
    }

    return connect<StateProps, {}, OwnProps, AppState>(mapStateToProps)(Test);
}
