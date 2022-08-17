// import { useSelector } from "react-redux";
import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css';

const TodoList = (props) => {
  const {todos, filterState} = props
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const todosClone = [...todos];
  console.log(todosClone)

  // const dispatch = useDispatch();

  // useEffect(() => { dispatch(getTodoThunk())},[])

  return (
    <div className="Todolist_content">
     { (todosClone?.length === 0) ?
     (<h2>Add todo now!!!</h2>):
        (
          todosClone.filter(e => filterState === 'Completed' ? e.complete === true : filterState === 'Active' ? e.complete === false : e.complete === false || e.complete === true).map((todo, index) => <TodoItem key={index} TodoItem = {todo} />)
            // todoLists.map(item => <TodoItem TodoItem = {item} />)
        ).reverse()
    }
    </div>
  )
}

export default TodoList