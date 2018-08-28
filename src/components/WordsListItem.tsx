import * as React from "react";
import "./WordsListItem.css";

export interface IWordsListItemProps {
    word: string;
    isFetching?: boolean;
    definition?: string;
    onClick: () => {};
}

export const WordsListItem: React.SFC<IWordsListItemProps> = props => (
    <div className="wordListItem">
        <a onClick={props.onClick}>{props.word}</a>
        {props.definition && <span>props.definition</span>}
        {props.isFetching && <span>loading...</span> }
    </div>
);
