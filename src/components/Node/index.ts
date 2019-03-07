import Editor, { StateProps, OwnProps } from './Node';
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

export default connect<StateProps, {}, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(Editor);
