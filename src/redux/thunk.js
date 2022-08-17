// // import React from 'react'
// // import { toast } from "react-toastify";
// import * as apiAction from "../api/Api.js";
// import * as action from "./actions.js";
// import { toast } from "react-toastify";

// // export const getTodoThunk = () => asyns (dispatch) => {
// //     try {
// //         const response = await actionsAPI

// //     } catch () {

// //     }
// // }

// export const getTodoThunk = () => async (dispatch) => {
//   try {
//     const response = await apiAction.apiGetTodo();
//     dispatch(action.getTodo(response.data));
//     toast.success('get success')
//   } catch (error) {
//     toast.error('get data fail')
//   }
// };

// export const addTodoThunk = (todo) => async (dispatch) => {
//   try {
//     await apiAction.apiAddTodo(todo);
//     const response = await apiAction.apiGetTodo();
//     dispatch(action.getTodo(response.data));
//     toast.success('add success')
//   } catch (error) {
//     toast.error('add data fail')
//   }
// };

// export const editTodoThunk = (todo) => async (dispatch) => {
//   try {
//     await apiAction.apiEditTodo(todo);
//     const response = await apiAction.apiGetTodo();
//     dispatch(action.getTodo(response.data));
//     toast.success('edit success')
//   } catch (error) {
//     toast.error('edit data fail')
//   }
// };

// export const deleteTodoThunk = (id) => async (dispatch) => {
//   try {
//     await apiAction.apiDeleteTodo(id);
//     const response = await apiAction.apiGetTodo();
//     dispatch(action.getTodo(response.data));
//     // dispatch(action.getTodo())
//     toast.success('delete success')
//   } catch (error) {
//     toast.error('delete data fail')
//   }
// };


// export const checkTodoThunk = (todo) => async (dispatch) => {
//   try {
//     await apiAction.apiCheckTodo(todo);
//     dispatch(action.check(todo.id));
//     // toast.success('check success')
//   } catch (error) {
//     console.log(error);
//   }
// };



