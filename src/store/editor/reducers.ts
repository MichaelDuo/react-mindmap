import { EditorState, ActionTypes, INCREASE } from './types';
import fakeData from '../_fakeStates/editor';

const initialState: EditorState = fakeData;

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
