import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTodoThunk } from '../../../../redux/todoSlice';
import './DeleteItem.css';
// import TodoItem from '../TodoItem/TodoItem';

const DeleteItem = ({closeDelete, TodoItem}) => {
  const dispatch = useDispatch();

  // console.log(TodoItem)


  const clickDelete = () => {
    dispatch(deleteTodoThunk(TodoItem.id))
    // console.log(TodoItem.id)
    closeDelete(false)
  }
  return (
    <div className='Delete_item'>
        <div className='Delete_item_content'>
            <p className='delete_title'>Are you sure about that?</p>
            <div className='btn_delete'>
                <button className='no' onClick={() => closeDelete(false)}>No</button>
                <button className='yes' onClick={clickDelete}>Yes</button>
            </div>
        </div>
        
    </div>
  )
}

export default DeleteItem