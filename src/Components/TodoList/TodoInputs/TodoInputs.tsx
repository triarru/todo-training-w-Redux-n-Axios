import React, { useState, useEffect } from "react";
import { addTodoThunk, updateTodoThunk } from "../../../redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import "./TodoInputs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ITodo } from "../../../redux/store";
import { IState }from "../../../redux/store"
import alert from '../../../assets/img/warning.png'

interface IProps {
  onClickToClose: () => void;
  btnValue: string;
  todoList?: ITodo;
}

const TodoInput = ({ onClickToClose, btnValue, todoList }: IProps) => {
  const [todo, setTodo] = useState("");
  const [datetime, setDatetime] = useState("");
  const [overlap, setOverlap] = useState(false)
  const dispatch = useDispatch();
  const todos = useSelector((state: IState) => state.todoList);

  useEffect(() => {
    if (todoList !== undefined) {
      setTodo(todoList.name);
      setDatetime(todoList.deadline);
    }
  }, [todoList]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    if (val.trim() !== "" || val !== "") {
      setTodo(val);
    }
  };

  const SaveAndClose = () => {
    if(todos.every(item => item.name !== todo) || todos.every(item => item.deadline !== datetime)){
      onClickedToSave();
      setOverlap(false)
      if (todo.trim() !== "" || todo !== "") {
        onClickToClose();
      } else {
        toast.warn("Please add smt", { autoClose: 2000 });
      }
    }else{
      setOverlap(true)
    }
  };

  const onClickedToSave = () => {
    if (todoList === undefined) {
      if (todo.trim() !== "" || todo !== "") {
        dispatch(
          addTodoThunk({
            id: Math.floor(Math.random() * 100),
            name: todo,
            isCompleted: false,
            deadline: datetime,
          })
        );
      }
    } else {
      dispatch(
        updateTodoThunk({
          id: todoList.id,
          name: todo,
          isCompleted: true,
          deadline: datetime,
        })
      );
    }

    setTodo("");
    setDatetime("");
  };

  const setDateTimeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatetime(e.currentTarget.value);
  };

 

  return (
    <div className="inputBoxShadow">
      <div className="inputBox container">
        <div className="inputBoxTodos">
          <h3>{btnValue} TODO:</h3>
          <input
            className="inputTodo"
            onChange={(e) => handleChange(e)}
            required
            type="text"
            value={todo}
          ></input>
          <input
            className="inputTodo"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDateTimeTodo(e)
            }
            type="datetime-local"
            value={datetime}
          ></input>
          {
            overlap && 
            <div className="warning">
              <p>Item Already Exists !!</p>
            </div>
          }
        </div>
        <div className="inputBoxButton">
          <button className="btn" onClick={SaveAndClose}>
            {btnValue}
          </button>
          <button className="btn" type="button" onClick={onClickToClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
