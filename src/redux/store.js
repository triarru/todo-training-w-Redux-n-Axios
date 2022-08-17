// // kho chung để dùng cho các components con
// import { createStore, applyMiddleware  } from "redux";
// import thunk from "redux-thunk";
// import {
//     ADD_TODO,  DELETE_TODO,
//     GET_TODOS, SET_FILTER,
//     SET_TODOS, TOGGLE_TODO,
//     UPDATE_TODO
// } from "./actions";


// // trong 1 cái kho cần có 
// //1.Reducer: là 1 function dùng để cập nhật lại các giá trị state trong kho chung dựa trến các actions hiện tại
// //2.initValue: khi tạo ra cái kho mà muốn xét 1 số giá trị mặc định nào đó
// //3.enhacncers: mít đồ where(thunk)

// // const composedEndacncers = composeWithDevTools();

// const initState = {
//     todoList: [],
// }


// const rootReducer = (state = initState, action) => {
//     switch (action.type) {
//         case ADD_TODO :
//             // console.log(action.payload)
//             return {
//                 ...state.todoList,
//                 todoList: action.payload
//             }     
//         case TOGGLE_TODO :
//             return {
//                 ...state.todoList,
//                 todoList: state.todoList.map(e => {
//                     if(e.id === action.payload) {
//                         return {
//                             ...e,
//                             complete: !e.complete
//                         }
//                     }else {
//                         return e
//                     }
//                 })
//             }
//         case DELETE_TODO:
//             return {
//                 ...state,
//                 todoList: state.todoList.filter(e => e.id !== e.payload)
//             }
            
//         case UPDATE_TODO :
//             return {
//                 ...state,
//                 todoList: state.todoList.map(e => action.payload)    
//             }
//         case SET_TODOS :
//             return {
//                 ...state,
//                 todoList: action.payload,
//             }
//         default:
//             return state    
//     }
// } 

// const store = createStore(rootReducer, applyMiddleware(thunk));

// // export type RootState = ReturnType<typeof appReducer>;

// export default store

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';

const store = configureStore ({
    reducer : {
        todos:todoReducer
    }
})


export default store