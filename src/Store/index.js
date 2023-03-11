import { createStore } from "redux";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const INITIAL_STORE = {
    count: 0,
}

export const store = createStore(reducer, INITIAL_STORE, composeWithDevTools());