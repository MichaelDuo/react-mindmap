import {
    createStore,
    combineReducers,
    Store,
    compose,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { editorReducer } from './editor/reducers';
import { nodesReducer } from './nodes/reducers';

const rootReducer = combineReducers({
    editor: editorReducer,
    nodes: nodesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(): Store {
    const store = createStore(
        rootReducer,
        {},
        composeEnhancer(applyMiddleware(thunk))
    );
    return store;
}
