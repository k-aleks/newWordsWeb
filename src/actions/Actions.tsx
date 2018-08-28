import { Action } from "redux";
import { ApiClient, IWordDefinitionResponse } from "../api-client";
import { IState } from "../state";

export enum ActionType {
    SELECT_LIST_ITEM,
    START_FETCHING_WORD_DEFINITION,
    FINISH_FETCHING_WORD_DEFINITION
}

export interface IAction<T> extends Action {
    type: ActionType;
    payload: T;
}

export function showWordDefinitionAsync(selectedWordIndex: number) {
    return (dispatch: any, getState: any): any => {
        dispatch(selectListItem(selectedWordIndex));
        const word = getState().words.get(selectedWordIndex);
        if (wordDefinitionFetchIsNeeded(word, getState())) {
            dispatch(startFetchingWordDefinition(word));
            new ApiClient().getWordDefinition(word).then((response: IWordDefinitionResponse) => {
                dispatch(finishFetchingWordDefinition(word, response.definition));
            });
        } else {
            return Promise.resolve();
        }
    };
}

function selectListItem(selectedWordIndex: number): IAction<number> {
    return {
        type: ActionType.SELECT_LIST_ITEM,
        payload: selectedWordIndex
    };
}

function startFetchingWordDefinition(word: string): IAction<string> {
    return {
        type: ActionType.START_FETCHING_WORD_DEFINITION,
        payload: word
    };
}

interface IWordDefinitionActionPayload {
    word: string;
    definition: string;
}

function finishFetchingWordDefinition(
    definedWord: string,
    wordDefinition: string
): IAction<IWordDefinitionActionPayload> {
    return {
        type: ActionType.FINISH_FETCHING_WORD_DEFINITION,
        payload: {
            word: definedWord,
            definition: wordDefinition
        }
    };
}

function wordDefinitionFetchIsNeeded(word: string, state: IState): boolean {
    if (word) {
        const cachedDefinition = state.definitions.get(word);
        if (!cachedDefinition || !cachedDefinition.definition) {
            return true;
        }
    }
    return false;
}
