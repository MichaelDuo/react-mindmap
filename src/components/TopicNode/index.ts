import TopicNode, { StateProps, OwnProps, DispatchProps } from './TopicNode';
import NodeHoc from 'components/NodeHoc';
import { connect } from 'react-redux';
import { AppState } from 'store';
import { increaseCount } from 'store/editor/actions';
import { TopicNode as ITopicNode } from 'store/nodes/types';
import { register } from 'utils/componentsRegistry';
import { addChildNode, addSiblingNode, deleteNode } from 'store/nodes/actions';

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
    return {
        node: state.nodes[ownProps.id] as ITopicNode,
    };
};

const mapDispatchToProps = {
    increaseCount,
    addChildNode,
    addSiblingNode,
    deleteNode,
};

const connected = connect<StateProps, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(TopicNode);

const TopicNodeContainer = (NodeHoc(
    connected as any
) as unknown) as typeof connected;

register('TopicNode', TopicNodeContainer);

export default TopicNodeContainer;
