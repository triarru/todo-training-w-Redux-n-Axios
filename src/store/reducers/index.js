import { combineReducers } from "redux"; // lay tat ca reduxer
import todoReducrer from './todoReducrer.js'

const rootReducer = combineReducers({
    myTodos : todoReducrer
})

export default rootReducer