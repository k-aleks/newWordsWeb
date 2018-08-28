import { ActionType, IAction } from "../actions";
import { IState } from "../state";

export function reducer(state: IState, action: IAction<any>): IState {
    switch (action.type) {
        case ActionType.SELECT_LIST_ITEM: {
            return { ...state, selectedWordIndex: action.payload };
        }
        case ActionType.START_FETCHING_WORD_DEFINITION: {
            const word = action.payload;
            return { 
                ...state, 
                definitions: state.definitions.set(word, { isFetching: true }) 
            };
        }
        case ActionType.FINISH_FETCHING_WORD_DEFINITION: {
            const def = action.payload;
            return { 
                ...state, 
                definitions: state.definitions.set(def.word, { definition: def.definition }) 
            };
        }
    }
    return state;
}