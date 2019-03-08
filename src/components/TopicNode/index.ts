import TopicNode, { StateProps, OwnProps } from './TopicNode';
import NodeHoc from 'components/NodeHoc';
import { connect } from 'react-redux';
import { AppState } from 'store';
import { increaseCount } from 'store/editor/actions';
import { TopicNode as ITopicNode } from 'store/nodes/types';

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
    return {
        node: state.nodes[ownProps.id] as ITopicNode,
    };
};

const mapDispatchToProps = {
    increaseCount,
};

const connected = connect<StateProps, {}, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(TopicNode);

export default NodeHoc(
    (connected as unknown) as React.ComponentClass
) as typeof connected;
