import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoThunk,getTodoThunk } from "../../../redux/todoSlice";
import "./TodoInputs.css";
// import v4 as uuidv4 from './'
// import calendar from '../../../img/calendar.png'

const TodoInputs = ({ close }) => {
  const [value, setValue] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState(false)
  const [text_error, setText_error] = useState(false)

  const todoList = useSelector(e => e.todos)

  // console.log(todoList)


  const dispatch = useDispatch();

  
  const changeValue = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value)
    if(e.target.value !== '' && e.target.value.trim() !== '') {
      setValue(e.target.value);
    }
  };
  
  const changeTime = (e) => {
    if(e.target.value !== '') {
      setTime(e.target.value)
      // console.log(e.target.value)
    }
  }
  
  const handleAdd = () => {
    if(value !== '' && value.trim() !== '' &&  todoList.every(todo => todo.title !== value) ) {
      dispatch(
        addTodoThunk({
          title: value,
          deadLine:time,
          complete: false
        })
        );
        close(false)
      }else if(value !== '' && value.trim() !== ''){
        setText(false)
      setText_error(true)
    }else{
      setText_error(false)
      setText(true)
    }
    // console.log(value)
  };

  return (
    <div className="inputBackground">
      
      <div className="inputContainer">
        <div className="navTitle">
          <h1 className="title_new_todo">New Todo</h1>
        </div>
        <div className="body">
          {
            text === true?
            <div>
              <input
            className="new_todo"
            placeholder="What needs to be done?"
            onChange={changeValue}
            value = {value}
            />
            <p className="text_error">you have no content</p>
            </div>:
            text_error === true?
            <div>
              <input
            className="new_todo"
            placeholder="What needs to be done?"
            onChange={changeValue}
            value = {value} />
            <p className="text_already_exists">Content already exists</p>
            </div>:
            <input
            className="new_todo"
            placeholder="What needs to be done?"
            onChange={changeValue}
            value = {value} />
          
          }
          {
             <input
             className="calendar"
             type="datetime-local"
             placeholder="none"
             onChange={changeTime}
           />
          }
          
        </div>
        <div className="footer">
          <button className="btnCancel" onClick={() => close(false)}>
            Cancel
          </button>
          <button className="btnAdd" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoInputs;
