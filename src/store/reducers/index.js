import { combineReducers } from "redux";
import TodoReducres from "./TodoReducres";

const rootReducres = combineReducers({
    Mytodos : TodoReducres
})

export default rootReducres