import Editor, { StateProps, OwnProps } from './Node';
import { connect } from 'react-redux';
import { AppState } from 'store';
import { increaseCount } from 'store/editor/actions';

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
    return {
        properties: state.nodes[ownProps.id].properties,
    };
};

const mapDispatchToProps = {
    increaseCount,
};

export default connect<StateProps, {}, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(Editor);
