import { createStore, combineReducers, Store } from 'redux';
import { mindmapReducer } from './mindmap/reducers';

const rootReducer = combineReducers({
    mindmap: mindmapReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store {
    const store = createStore(rootReducer);
    return store;
}
