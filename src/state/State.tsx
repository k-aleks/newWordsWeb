import { List, Map } from "immutable";

export interface IState {
    /**
     * An index of selected word.
     */
    selectedWordIndex: number | undefined;

    /**
     * List of all words for the selected user.
     */
    words: List<string>;

    /**
     * A cache of definitions.
     */
    definitions: Map<string, IDefinition>;
}

interface IDefinition {
    isFetching?: boolean;
    definition?: string;
}

export const TestState: IState = {
    selectedWordIndex: -1,
    words: List.of("hello", "world", "main beam"),
    definitions: Map.of()
};
