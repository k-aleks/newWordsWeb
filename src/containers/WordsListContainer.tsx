import { connect } from "react-redux";
import * as actions from "../actions/";
import { WordsList } from "../components";
import { IState } from "../state";

export function mapStateToProps(state: IState) {
    const selectedWord = state.selectedWordIndex! >= 0 ? state.words.get(state.selectedWordIndex!) : undefined;
    const wordsInList = Array<{
        word: string;
        definition?: string;
    }>();
    state.words.forEach(w => {
        const def =
            w === selectedWord && selectedWord
                ? state.definitions.get(selectedWord, "requesting the definition...")
                : undefined;
        wordsInList.push({
            word: w!,
            definition: def
        });
    });
    return {
        listItems: wordsInList
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        onItemClick: (index: number) => dispatch(actions.selectListItem(index))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordsList);
