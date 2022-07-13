import { GET_TODO, ADD_TODO, MARK_COMPLETED, DELETE,FILTER, EDIT_TODO, ADD_NEW } from "../type"

// export const markCompleted = () => {
//     const markCompleteAction = dispatch => {
//         dispatch({
//             type: 'MARK_COMPLETED',
//             payload: 'my payload'
//         })
//     }

import axios from "axios";

//     return markCompleteAction
// }
export const getTodo = () => async dispatch => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
        dispatch({
            type: GET_TODO,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const editedTodo = (id) => async dispatch => {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/todos', id)
        dispatch({
            type: EDIT_TODO,
            payload: id
        });
    } catch (error) {
        console.log(error)
    }
}

export const addNew = newTitle => async dispatch => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', newTitle)
        dispatch({
            type : ADD_NEW,
            payload: newTitle
        })
    } catch (error) {
        console.log(error)
    }

}

export const markCompleted = (id) =>async dispatch => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        console.log(response)
        dispatch({
            type: MARK_COMPLETED,
            payload: response.data.id,
          });
    } catch (error) {
        console.log(error)
    }
    // console.log(id)
  
};

export const addTodo = newtodo =>async dispatch => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', newtodo)
        dispatch({
            type: ADD_TODO,
            payload: newtodo
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteTodo = id =>async dispatch => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        dispatch({
            type: DELETE,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}
