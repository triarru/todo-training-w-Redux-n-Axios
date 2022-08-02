import React, { useState } from "react";
import moment from "moment";

import "./TodoItem.css";
import edit from "../../../../img/edit.png";
import deleted from "../../../../img/delete.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import DeleteItem from "../DeleteItem/DeleteItem";
import EditItem from "../EditItem/EditItem";
import { check } from "../../../../redux/actions";
import checked from '../../../../img/check.png'
import unchecked from '../../../../img/uncheck.png'
import { checkTodoThunk } from "../../../../redux/thunk";

const TodoItem = ({ TodoItem }) => {
  
  const dispatch = useDispatch();

  
  const [openDelete, setOpenDelete] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);

  const clickOpenDelete = () => {
    setOpenDelete(true);
  };

  const clickOpenEdit = () => {
    setOpenEdit(true);
    // console.log(openEdit);
  };

  const clickCheck = () => {
    dispatch(checkTodoThunk(TodoItem));

  };

  // console.log(TodoItem);
  return (
    <div className="TodoContents">
      {openDelete === true ? (
        <div>
          <div className='overlay'></div>
          <DeleteItem closeDelete={setOpenDelete} TodoItem = {TodoItem}/>
          <div  className={TodoItem.complete === true ?'Todo_complete' :"List_todo"}>
          <div className="Nav_list_todo">
            <img className="img_check"  src={TodoItem.complete === true ? checked : unchecked} alt="" onClick={clickCheck}/>
            {/* <input type="checkbox" onClick={clickCheck} className = 'checkCompleted' /> */}
            <div className="todo_and_time">
            <p className={TodoItem.complete === true ? "completed" : "unCompleted"}> {TodoItem.title}</p>
            <p className={ moment(TodoItem.deadLine).format('LLLL') === 'Invalid date'?"no_time":"unCompleted_time"}> {moment(TodoItem.deadLine).format('LLLL')}</p>

            </div>
          </div>
          <div>
            <img src={edit} onClick={clickOpenEdit} className="edit" alt="" />

            <img
              src={deleted}
              onClick={clickOpenDelete}
              className="delete"
              alt=""
            />
          </div>
        </div>
        </div>
      ) : openEdit === true ? (
        <div>
          <div className='overlay'></div>
          <EditItem closeEdit={setOpenEdit} TodoItem = {TodoItem}/>
          <div  className={TodoItem.complete === true ?'Todo_complete' :"List_todo"}>
          <div className="Nav_list_todo">
            <img className="img_check"  src={TodoItem.complete === true ? checked : unchecked} alt="" onClick={clickCheck}/>
            {/* <input type="checkbox" onClick={clickCheck} className = 'checkCompleted' /> */}
            <div className="todo_and_time">
            <p className={TodoItem.complete === true ? "completed" : "unCompleted"}> {TodoItem.title}</p>
            <p className={ moment(TodoItem.deadLine).format('LLLL') === 'Invalid date'?"no_time":"unCompleted_time"}> {moment(TodoItem.deadLine).format('LLLL')}</p>
           
            </div>
          </div>
          <div>
            <img src={edit} onClick={clickOpenEdit} className="edit" alt="" />

            <img
              src={deleted}
              onClick={clickOpenDelete}
              className="delete"
              alt=""
            />
          </div>
        </div>
        </div>
      ) : (
        <div  className={TodoItem.complete === true ?'Todo_complete' :"List_todo"}>
          <div className="Nav_list_todo">
            <img className="img_check"  src={TodoItem.complete === true ? checked : unchecked} alt="" onClick={clickCheck}/>
            {/* <input type="checkbox" onClick={clickCheck} className = 'checkCompleted' /> */}
            <div className="todo_and_time">
            <p className={TodoItem.complete === true ? "completed" : "unCompleted"}> {TodoItem.title}</p>
            <p className={ moment(TodoItem.deadLine).format('LLLL') === 'Invalid date'?"no_time":"unCompleted_time"}> {moment(TodoItem.deadLine).format('LLLL')}</p>
            </div>
          </div>
          <div>
            <img src={edit} onClick={clickOpenEdit} className="edit" alt="" />

            <img
              src={deleted}
              onClick={clickOpenDelete}
              className="delete"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
