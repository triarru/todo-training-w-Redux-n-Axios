import moment from "moment";
import TodoInputs from "../TodoInputs/TodoInputs";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { checkTodoThunk } from "../../../redux/thunk";
import "./TodoItem.css";
import edit from "../../../assets/img/pencil.png";
import deleteitem from "../../../assets/img/trash.png";
import undone from "../../../assets/img/undone.png";
import done from "../../../assets/img/done.png";

import { ITodo } from "../../../redux/store";
import DeleteModal from "../../DeleteModal/DeleteModal";

function TodoItems({ todoList }: any) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isDeadlineNear, setIsDeadlineNear] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleEditTodo = () => {
    let val = isButtonClicked;
    setIsButtonClicked(!val);
  };

  const onClickToClose = () => {
    let val = isButtonClicked;
    setIsButtonClicked(!val);
  };

  const handleDeleteModal = () =>{
    let val = isDeleteModalOpen 
    setIsDeleteModalOpen(!val)
  }

  const onClickToCloseDeleteModal = () => {
    let val = isDeleteModalOpen
    setIsDeleteModalOpen(!val)
  }


  const checkTodos = (todoList: ITodo) => {
    dispatch(checkTodoThunk(todoList));
  };

  useEffect(() => {
    const now = new Date();
    const deadline = new Date(todoList?.deadline);
    const a = deadline.getTime() - now.getTime();
    if (a < 1000 * 60 * 60 && a > 0) {
      setIsDeadlineNear("Near");
    } else if (a < 0) {
      setIsDeadlineNear("Late");
    } else {
      setIsDeadlineNear("Far");
    }
  }, [todoList]);

  return (
    <div>
      <div className="todoListModal">
        <div className="leftBtn">
          <img
            src={todoList.isCompleted ? done : undone}
            alt=""
            width={32}
            height={32}
            className="checkImg"
            onClick={() => checkTodos(todoList)}
          />
        </div>
        <div className="todoItem">
          <div>
            <div className={todoList.isCompleted ? "done" : "undone"}>
              {todoList.name}
            </div>
            {todoList.deadline && (
              <div
                className={
                  !todoList.isCompleted
                    ? isDeadlineNear === "Near"
                      ? "nearDeadline deadline"
                      : isDeadlineNear === "Late"
                      ? "lateDeadline deadline"
                      : "deadline"
                    : "deadline"
                }
              >
                Deadline:{" "}
                {moment(todoList.deadline).format("DD/MM/YYYY, h:mm a")}
                {!todoList.isCompleted ? (
                  isDeadlineNear === "Near" ? (
                    <div className="nearNoti"> Near </div>
                  ) : isDeadlineNear === "Late" ? (
                    <div className="lateNoti"> Late </div>
                  ) : (
                    <div></div>
                  )
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="rightBtn hide">
          <img
            src={edit}
            alt=""
            width={20}
            height={20}
            className="editImg"
            onClick={handleEditTodo}
          />
          <img
            src={deleteitem}
            alt=""
            width={24}
            height={24}
            className="editImg"
            onClick={handleDeleteModal}
          />
        </div>
      </div>

      {isButtonClicked && (
        <TodoInputs
          onClickToClose={onClickToClose}
          btnValue={"EDIT"}
          todoList={todoList}
        />
      )}

        {isDeleteModalOpen && (
          <DeleteModal
            todoList={todoList} 
            onClickToClose={onClickToCloseDeleteModal}
          />
        )}

    </div>
  );
}

export default TodoItems;
