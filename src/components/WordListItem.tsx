import * as React from "react";
import "./WordListItem.css";

export interface IWordListItemProps {
    word: string;
    definition?: string;
    onClick: () => {};
}

export const WordListItem: React.SFC<IWordListItemProps> = props => (
    <div className="wordListItem">
        <a onClick={props.onClick}>{props.word}</a>
        <span>{props.definition}</span>
    </div>
);
