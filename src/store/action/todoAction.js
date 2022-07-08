import axios from "axios";
import {GET_TODOS, ADD_TODO, DELETE} from '../types'
export const MARK_COMPLETE = 'Mark_complete'

export const getTodo = () => async dispatch => {
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
    dispatch({
      type: GET_TODOS,
      payload: response.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const markComplete = (id) => {
  return {
    type: MARK_COMPLETE,
    payload: id,
  };
};

export const addTodo = newTodo => async dispatch => {
  try {
    await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo )
    dispatch({
    type:ADD_TODO,
    payload: newTodo
    })
  } catch (error) {
    console.log(error)
  }
  
}

export const deleteTodo = id => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    dispatch({
    type: DELETE,
    payload: id,
    })
  } catch (error) {
    console.log(error)
  }
 
}