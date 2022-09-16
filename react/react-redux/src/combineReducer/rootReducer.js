import { combineReducers } from "redux";
import { changeNameReducer } from "./ChangeNameReducer/changeNameReducer";
import { numberReducer } from "./NumberReducer/numberReducer";

export const rootReducer = combineReducers({
    number: numberReducer,
    changeName: changeNameReducer
})