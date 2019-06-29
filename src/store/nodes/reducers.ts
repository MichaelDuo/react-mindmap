import { AnyAction } from 'redux';
import { NodesState } from './types';
import fakeData from '../_fakeStates/nodes';
import { ADD_CHILD_NODE, ADD_SIBLING_NODE, DELETE_NODE } from './actions';
import _ from 'lodash';
import uuid from 'uuid/v4';

const initialState: NodesState = fakeData;

export function nodesReducer(
    state = initialState,
    action: AnyAction
): NodesState {
    switch (action.type) {
        case ADD_CHILD_NODE: {
            state = _.cloneDeep(state);
            const target = state[action.payload.id];
            if (!target) return state;
            const nodeId = uuid();
            const newNode = {
                id: nodeId,
                type: 'topic',
                ownerId: target.id,
                version: 0,
                properties: {
                    title: 'new topic',
                    children: [],
                },
            };
            state[newNode.id] = newNode;
            target.properties.children.unshift(newNode.id);
            return state;
        }
        case ADD_SIBLING_NODE: {
            state = _.cloneDeep(state);
            const target = state[action.payload.id];
            if (!target) return state;
            const owner = state[target.ownerId];
            if (!owner) return state;
            const nodeId = uuid();
            const newNode = {
                id: nodeId,
                type: 'topic',
                ownerId: owner.id,
                version: 0,
                properties: {
                    title: 'new topic',
                    children: [],
                },
            };
            state[nodeId] = newNode;
            const targetIndex = _.findIndex(
                owner.properties.children,
                nodeId => nodeId === target.id
            );
            owner.properties.children.splice(targetIndex + 1, 0, newNode.id);
            return state;
        }
        case DELETE_NODE: {
            state = _.cloneDeep(state);
            const result = _.transform(
                state,
                (result, value, key) => {
                    if (value.id !== action.payload.id) {
                        value.properties.children = _.filter(
                            value.properties.children,
                            cId => cId !== action.payload.id
                        );
                        result[key] = value;
                    }
                },
                {} as any
            );
            return result;
        }
        default:
            return state;
    }
}
