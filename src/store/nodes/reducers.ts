import { NodesState } from './types';
import fakeData from '../_fakeStates/nodes';

const initialState: NodesState = fakeData;

export function nodesReducer(state = initialState): NodesState {
    return state;
}
