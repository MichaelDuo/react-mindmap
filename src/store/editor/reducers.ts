import { EditorState, ActionTypes, INCREASE } from './types';
const initialState: EditorState = {
    count: 1,
};

export function editorReducer(
    state = initialState,
    action: ActionTypes
): EditorState {
    switch (action.type) {
        case INCREASE:
            return { ...state, ...{ count: state.count + 1 } };
        default:
            return state;
    }
}
