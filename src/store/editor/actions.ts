import { IncreaseAction, INCREASE } from './types';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AppState } from 'store';

export const increaseCount = (): IncreaseAction => ({
    type: INCREASE,
});

export const displayNodes = (
    ids: string[]
): ThunkAction<void, AppState, undefined, AnyAction> => {
    return (_, getState) => {
        console.log('Display Nodes :', ids);
        const state = getState();
        console.log(state);
    };
};
