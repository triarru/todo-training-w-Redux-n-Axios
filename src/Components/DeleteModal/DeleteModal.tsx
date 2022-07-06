import React from "react";
import { useDispatch } from "react-redux";
import { ITodo } from "../../redux/store";
import { deleteTodoThunk } from "../../redux/thunk";
import "./DeleteModal.css";

interface IProps {
  onClickToClose: () => void;
  todoList: ITodo[];
}

function DeleteModal({ onClickToClose, todoList }: IProps) {
  const dispatch = useDispatch();

  const deleteTodos = (todoList: any) => {
    dispatch(deleteTodoThunk(todoList.id));
    onClickToClose();
  };

  return (
    <div className="confirmBoxShadow">
      <div className="confirmBox container">
        <div>
          <h3>CONFIRM DELETE ?</h3>
          <button className="btn" onClick={() => deleteTodos(todoList)}>
            {" "}
            CONFIRM{" "}
          </button>
          <button className="btn" onClick={onClickToClose}>
            {" "}
            CANCEL{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
