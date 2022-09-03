import {combineReducers} from "redux";
import {dataReducer} from "./data";
import {tonState} from "./tonState";

export const rootReducer = combineReducers({
    data: dataReducer,
    tonState : tonState
})