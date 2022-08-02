import { useSelector } from "react-redux";
import React, { useEffect } from 'react'
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css'
import { useDispatch } from "react-redux";

import { getTodoThunk } from "../../../../redux/thunk";

const TodoList = (props) => {
  const {todos, filterState} = props
  
  const todosClone = [...todos];

  const dispatch = useDispatch();

  useEffect(() => { dispatch(getTodoThunk(todosClone))},[getTodoThunk])

  // console.log(todosClone)
  // console.log(filterState)

  return (
    <div className="Todolist_content">
     { (todosClone?.length === 0) ?
     (<h2>Add todo now!!!</h2>):
        (
          todosClone.filter(e => filterState === 'Completed' ? e.complete === true : filterState === 'Active' ? e.complete === false : e.complete === false || e.complete === true).map((todo, index) => <TodoItem key={index} TodoItem = {todo} />)
            // todoLists.map(item => <TodoItem TodoItem = {item} />)

        )
    }
    </div>
  )
}

export default TodoList