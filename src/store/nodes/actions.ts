export const test = 1;

export const ADD_CHILD_NODE = 'ADD_CHILD_NODE';
export const ADD_SIBLING_NODE = 'ADD_SIBLING_NODE';
export const DELETE_NODE = 'DELETE_NODE';

export const addChildNode = ({ id }: { id: string }) => ({
    type: ADD_CHILD_NODE,
    payload: { id },
});

export const addSiblingNode = ({ id }: { id: string }) => ({
    type: ADD_SIBLING_NODE,
    payload: { id },
});

export const deleteNode = ({ id }: { id: string }) => ({
    type: DELETE_NODE,
    payload: { id },
});
