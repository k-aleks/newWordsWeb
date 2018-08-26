import * as React from "react";
import { WordListItem } from "./WordListItem";

export interface IWordsListProps {
    listItems: Array<{
        word: string,
        definition?: string
    }>;
    onItemClick: (index: number) => {};
}

export const WordsList: React.SFC<IWordsListProps> = props => (
    <div>
        {props.listItems.map((item, index) => (
            // tslint:disable-next-line:jsx-no-lambda
            <WordListItem key={index} onClick={() => props.onItemClick(index)} {...item}/>
        ))}
    </div>
);