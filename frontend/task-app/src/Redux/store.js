import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./userReducer/reducer";
import { taskReducer } from "./taskReducer/reducer";

const rootReducer = combineReducers({ userReducer, taskReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
