import * as React from "react";
import { WordsListItem } from "./WordsListItem";

export interface IWordsListProps {
    listItems: Array<{
        word: string,
        isFetching?: boolean;
        definition?: string
    }>;
    onItemClick: (index: number) => {};
}

export const WordsList: React.SFC<IWordsListProps> = props => (
    <div>
        {props.listItems.map((item, index) => (
            // tslint:disable-next-line:jsx-no-lambda
            <WordsListItem key={index} onClick={() => props.onItemClick(index)} {...item}/>
        ))}
    </div>
);