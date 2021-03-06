import Editor, { OwnProps, StateProps, DispatchProps } from './Editor';
import { connect } from 'react-redux';
import { AppState } from 'store';
import { increaseCount } from 'store/editor/actions';

const mapStateToProps = (state: AppState): StateProps => {
    return {
        rootNodeId: state.editor.rootNodeId,
    };
};

const mapDispatchToProps = {
    increaseCount,
};

export type EditorProps = OwnProps;
export default connect<StateProps, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(Editor);
