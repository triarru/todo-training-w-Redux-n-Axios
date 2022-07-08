import { MARK_COMPLETE } from "../action/todoAction";
import {GET_TODOS, ADD_TODO, DELETE} from '../types'

const initialState = {
  todos: [
    // {
    //   id: 1,
    //   title: "viec 1",
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   title: "viec 2",
    //   completed: false,
    // },
  ],
};

const todoReducrer = (state = initialState, action) => {
  switch (action.type) {

    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      }

    case MARK_COMPLETE:
      return{
        ...state,
        todos : state.todos.map(todo =>{
          if(todo.id === action.payload) todo.completed = ! todo.completed
          return todo
        })
        
      }
    
    case ADD_TODO:
      return{
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    
    case DELETE:
      return{
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }

    default:
      return state;
  }
};

export default todoReducrer;
