import Editor, { StateProps } from './Editor';
import { connect } from 'react-redux';
import { AppState } from '../../store';

const mapStateToProps = (state: AppState): StateProps => {
    return {
        mindmapId: state.mindmap.id,
    };
};

export default connect<StateProps, {}, {}, AppState>(mapStateToProps)(Editor);
