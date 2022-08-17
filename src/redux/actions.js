// // export const addTodoAction = {
// //     type: 'todolist/addTodo',
// //     payload: 
// //     {id: 2,name: 'hoc redux', complete: false,option:false, edit: false}

// // import { type } from "@testing-library/user-event/dist/types/utility";

// // import { type } from "@testing-library/user-event/dist/types/utility";

// // }

// export const ADD_TODO = "ADD_TODO";
// export const DELETE_TODO = "DELETE_TODO";
// export const UPDATE_TODO = "UPDATE_TODO";
// export const TOGGLE_TODO = "TOGGLE_TODO";
// export const SET_NEWTODO = "SET_NEWTODO";
// export const SET_TODOS = "SET_TODOS";
// export const GET_TODOS = "GET_TODOS";
// export const SET_FILTER = "SET_FILTER";

// export const addTodo = (todo) => ({
//     type: ADD_TODO,
//     payload: todo
// })

// export const check = (id) => ({
//     type: TOGGLE_TODO,
//     payload: id
// })

// export const deleted = (id) => ({
//     type: DELETE_TODO,
//     payload: id
// })

// export const edit = (todo) => ({
//     type: UPDATE_TODO,
//     payload: todo
// })

// export const filter = (filter) => ({
//     type: SET_FILTER,
//     payload: filter
// })

// export const setTodo = (todo) => ({
//   type: SET_TODOS,
//   payload: todo  
// })

// export const getTodo = (data) => (dispatch) => {
//     console.log(data)
//     const todos = data;
//     let listTodo = [];
//     for(let todo of todos) {
//         listTodo.unshift(todo)
//     }
//   dispatch(setTodo(listTodo));
// }



// // action creator: la 1 function dung để trả về 1 action : => funtion