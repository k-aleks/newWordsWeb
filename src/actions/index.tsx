import { Action } from "redux";

export enum ActionType {
    SELECT_LIST_ITEM,
}

export interface IAction<T> extends Action {
    type: ActionType;
    payload: T;
}

export function selectListItem(index: number): IAction<number> {
    return {
        type: ActionType.SELECT_LIST_ITEM,
        payload: index
    }
}
