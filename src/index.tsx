import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from 'redux-thunk'
import { ActionType, IAction } from "./actions";
import WordsListContainer from "./containers/WordsListContainer";
import "./index.css";
import { reducer } from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import { TestState } from "./state";

const actionTypeEnumToString = (action: IAction<any>): any =>
    typeof action.type === "number" && ActionType[action.type]
        ? {
              type: ActionType[action.type],
              payload: action.payload
          }
        : action;

const logger = createLogger({ actionTransformer: actionTypeEnumToString });

export const store = createStore(reducer, TestState, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <WordsListContainer />
    </Provider>,
    document.getElementById("root") as HTMLElement
);

registerServiceWorker();
