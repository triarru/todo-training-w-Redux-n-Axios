import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux/es/exports";
import TodoForm from "./TodoForm";
import { markComplete } from "../store/action/todoAction";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/action/todoAction";
import { getTodo } from "../store/action/todoAction";
const Todos = ({todos,getTodo, deleteTodo}) => {
  //get todo
  useEffect(()=>{
    getTodo()
  },[])
  const dispatch = useDispatch(); 
  // const todos = useSelector(state => state.myTodos.todos)S

  const handleCheckbox = (e) => {
    dispatch(markComplete(e));
    
  };

  
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.reverse().map((todo) => (
          <li key={todo.id} className = {todo.completed? 'completed' : ' '}>
            {todo.title}
            <input type="checkbox" onClick={()=> handleCheckbox(todo.id)} />
            <button onClick={deleteTodo.bind(this, todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.propTypes = {
  todos : PropTypes.array.isRequired,
  getTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired 
}


const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, {getTodo,markComplete, deleteTodo}) (Todos);
