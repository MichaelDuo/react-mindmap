export interface Node {
    id: string;
    properties: object;
}

export interface NodesState {
    [id: string]: Node;
}
