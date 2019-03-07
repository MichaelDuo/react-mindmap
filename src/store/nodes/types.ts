export interface Node {
    id: string;
    properties: object;
}

export interface TopicNode extends Node {
    properties: {
        title: string;
    };
}

export interface NodesState {
    [id: string]: Node;
}
