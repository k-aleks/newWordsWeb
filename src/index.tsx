import { List, Map } from "immutable";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { ActionType, IAction } from "./actions";
import WordsListContainer from "./containers/WordsListContainer";
import "./index.css";
import { reducer } from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import { IState } from "./state";

const actionTypeEnumToString = (action: IAction<any>): any =>
    typeof action.type === "number" && ActionType[action.type]
        ? {
              type: ActionType[action.type],
              payload: action.payload
          }
        : action;

const logger = createLogger({ actionTransformer: actionTypeEnumToString });

const staticState: IState = {
    selectedWordIndex: -1,
    words: List.of("hello", "world", "main beam"),
    definitions: Map([
        { hello: "used as a greeting when you meet someone or begin to talk to someone on the telephone" },
        { world: "the world the planet that we live on" }
    ])
};

export const store = createStore(reducer, staticState, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <WordsListContainer />
    </Provider>,
    document.getElementById("root") as HTMLElement
);

registerServiceWorker();
