import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodoThunk } from '../../../../redux/todoSlice';
import './EditItem.css';

const EditItem = ({closeEdit, TodoItem}) => {

  const dispatch = useDispatch();

  const todoList = useSelector(e => e.todos)

  const[newValue, setNewValue] = useState(TodoItem.title)

  const[newTime, setNewTime] = useState(TodoItem.deadLine)

  const [text_error, setText_error] = useState(false)

  const [text, setText] = useState(false)

  const ChangeOldValue = (e) => {
      setNewValue(e.target.value)
  }

  const ChangeOldTime = (e) => {
    setNewTime(e.target.value)
  }

  const submitNewValue = () => {
    // eslint-disable-next-line no-mixed-operators
    if(newValue !== '' && newValue.trim() !== '' && newTime !== todoList.deadLine || todoList.every(todo => todo.title !== newValue)) {
      dispatch(editTodoThunk({
        id : TodoItem.id,
        title: newValue,
        deadLine: newTime,
        complete: TodoItem.complete,
      }))
      closeEdit(false)
    }else if(newValue !== '' && newValue.trim() !== ''){
      setText(false)
      setText_error(true);
      // {break}
    }else{
      setText_error(false)
      setText(true)
      
    }
  }

  return (
    <div className='Edit'>
        <div className='Edit_content'>
            <h1 className='title_content'>Edit todo</h1>
            <div className='title_body' >
              {
                text === true?
                <div>
                  <input className='new_title' value={newValue} onChange = {ChangeOldValue}/>
                  <p className="text_error">you have no content</p>
                </div>
                :text_error === true?
                <div>
                  <input className='new_title' value={newValue} onChange = {ChangeOldValue}/>
                  <p className="text_error">Content already exists</p>
                </div>
                :
                <input className='new_title' value={newValue} onChange = {ChangeOldValue}/>
              }
            <input className='new_calendar' type="datetime-local" value={newTime} onChange = {ChangeOldTime} />
            </div>
            <div className='btn_edit'>
                <button className='btn_cancel' onClick={() => closeEdit(false)}>Cancel</button>
                <button className='btn_save' onClick={submitNewValue}>Save</button>
            </div>
        </div>

    </div>
  )
}

export default EditItem