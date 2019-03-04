export interface EditorState {
    count: number;
    rootNodeId: string;
}

export const INCREASE = 'INCREASE';

export interface IncreaseAction {
    type: typeof INCREASE;
}

export type ActionTypes = IncreaseAction;
