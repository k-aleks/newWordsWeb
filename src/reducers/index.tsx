import { ActionType, IAction } from "../actions";
import { IState } from "../state";

export function reducer(state: IState, action: IAction<any>): IState {
    switch(action.type) {
        case ActionType.SELECT_LIST_ITEM: {
            return {...state, selectedWordIndex: action.payload};
        }
    }
    return state;
}