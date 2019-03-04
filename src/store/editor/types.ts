export interface EditorState {
    count: number;
}

export const INCREASE = 'INCREASE';

export interface IncreaseAction {
    type: typeof INCREASE;
}

export type ActionTypes = IncreaseAction;
