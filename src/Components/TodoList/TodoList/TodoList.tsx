import TodoItem from "../TodoItems/TodoItem";

import { useSelector } from "react-redux";
import { ITodo, IState } from "../../../redux/store";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state: IState) => state.todoList);
  return (
    <div className="todoList">
      {todos.length === 0 ? (
        <div className="noTodo">
          <p>Nothing Here !</p>
        </div>
      ) : (
        <div></div>
      )}
      {todos
        .map((todoList: ITodo) => <TodoItem todoList={todoList} />)
        .reverse()}
    </div>
  );
};

export default TodoList;
