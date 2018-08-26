import { List, Map } from "immutable";

export interface IState {
    selectedWordIndex: number | undefined;
    words: List<string>;
    definitions: Map<string, string>;
}
