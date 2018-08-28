import { connect } from "react-redux";
import * as actions from "../actions/";
import { WordsList } from "../components";
import { IState } from "../state";

export function mapStateToProps(state: IState) {
    const selectedWord = state.selectedWordIndex! >= 0 ? state.words.get(state.selectedWordIndex!) : undefined;
    const wordsInList = Array<{
        word: string;
        isFetching?: boolean;
        definition?: string;
    }>();
    state.words.forEach(word => {
        let definition;
        let isFetching;
        if (selectedWord && word === selectedWord) {
            const definitionInState = state.definitions.get(selectedWord);
            if (definitionInState) {
                definition = definitionInState.definition;
                isFetching = definitionInState.isFetching;
            }
        }
        wordsInList.push({
            "word": word!,
            "isFetching": isFetching,
            "definition": definition
        });
    });
    return {
        listItems: wordsInList
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        onItemClick: (index: number) => dispatch(actions.showWordDefinitionAsync(index))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordsList);
