import { createStore, combineReducers, Store, compose } from 'redux';
import { editorReducer } from './editor/reducers';
import { nodesReducer } from './nodes/reducers';

const rootReducer = combineReducers({
    editor: editorReducer,
    nodes: nodesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(): Store {
    const store = createStore(rootReducer, composeEnhancer());
    return store;
}
