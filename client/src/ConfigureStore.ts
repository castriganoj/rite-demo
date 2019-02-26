import { createStore, applyMiddleware, compose, combineReducers, ReducersMapObject } from "redux";
import { routerMiddleware } from "connected-react-router";
import { ApplicationState, reducers } from "./stores/index";
import { History } from "history";
import { connectRouter } from "connected-react-router";
import logger from "redux-logger";

export default function ConfigureStore(history: History, initialState?: ApplicationState) {
  const rootReducer = buildRootReducer(history, reducers);

  const store = createStore(rootReducer, initialState, compose(applyMiddleware(logger, routerMiddleware(history))));

  return store;
}

function buildRootReducer(history: History, allReducers: ReducersMapObject) {
  return combineReducers<ApplicationState>(Object.assign({}, allReducers, {
    router: connectRouter(history),
  }) as any);
}
