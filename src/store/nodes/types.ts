export interface Node {
    id: string;
    properties: any;
    ownerId: string;
}

export interface TopicNode extends Node {
    id: string;
    type: string;
    version: number;
    properties: {
        title: string;
        children: string[];
    };
}

export interface NodesState {
    [id: string]: Node;
}
