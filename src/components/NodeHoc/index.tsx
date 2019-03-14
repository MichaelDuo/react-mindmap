import React from 'react';
import Node, { StateProps, OwnProps, DispatchProps } from './Node';
import { connect } from 'react-redux';
import { AppState } from 'store';
import { displayNodes } from 'store/editor/actions';

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
    return {
        node: state.nodes[ownProps.id],
    };
};

const mapDispatchToProps = {
    displayNodes,
};

export default function NodeHoc(BaseComponent: React.ComponentClass) {
    class Wrapper extends React.PureComponent<
        OwnProps & StateProps & DispatchProps
    > {
        public render() {
            return (
                <Node {...this.props}>
                    <BaseComponent {...this.props} />
                </Node>
            );
        }
    }

    return connect<StateProps, DispatchProps, OwnProps, AppState>(
        mapStateToProps,
        mapDispatchToProps
    )(Wrapper);
}
