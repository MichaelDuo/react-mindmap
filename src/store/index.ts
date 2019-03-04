import { createStore, combineReducers, Store } from 'redux';
import { editorReducer } from './editor/reducers';
import { nodesReducer } from './nodes/reducers';

const rootReducer = combineReducers({
    editor: editorReducer,
    nodes: nodesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store {
    const store = createStore(rootReducer);
    return store;
}
