import moment from "moment";
import React, { useEffect, useState } from "react";
import deleted from "../../../../img/delete.png";
import edit from "../../../../img/edit.png";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import DeleteItem from "../DeleteItem/DeleteItem";
import EditItem from "../EditItem/EditItem";
import checked from "../../../../img/check.png";
import unchecked from "../../../../img/uncheck.png";
import { checkTodoThunk } from "../../../../redux/todoSlice";

const TodoItem = ({ TodoItem }) => {
  const dispatch = useDispatch();

  const [openDelete, setOpenDelete] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);

  const [deadLine, setDeadLine] = useState("far");

  useEffect(() => {
    const d = new Date();
    const time = new Date(TodoItem.deadLine);
    const a = time.getTime() - d.getTime();
    if (a < 0) {
      setDeadLine("late");
    } else if (a < 1000 * 60 * 60 && a > 0) {
      setDeadLine("near");
    } else {
      setDeadLine("far");
    }
  }, [TodoItem.deadLine]);

  const clickOpenDelete = () => {
    setOpenDelete(true);
  };

  const clickOpenEdit = () => {
    setOpenEdit(true);
  };

  const clickCheck = () => {
    dispatch(checkTodoThunk(TodoItem));
  };

  return (
    <div className="TodoContents">
      {openDelete === true ? (
        <div>
          <div className="overlay"></div>
          <DeleteItem closeDelete={setOpenDelete} TodoItem={TodoItem} />
          <div
            className={
              TodoItem.complete === true ? "Todo_complete" : "List_todo"
            }
          >
            <div className="Nav_list_todo">
              <img
                className="img_check"
                src={TodoItem.complete === true ? checked : unchecked}
                alt=""
                onClick={clickCheck}
              />
              {/* <input type="checkbox" onClick={clickCheck} className = 'checkCompleted' /> */}
              <div className="todo_and_time">
                <p
                  className={
                    TodoItem.complete === true ? "completed" : "unCompleted"
                  }
                >
                  {" "}
                  {TodoItem.title}
                </p>
                {deadLine === "late" ? (
                  <p
                    className={
                      moment(TodoItem.deadLine).format("LLLL") ===
                      "Invalid date"
                        ? "no_time"
                        : "unCompleted_timelate"
                    }
                  >
                    {moment(TodoItem.deadLine).format("LLLL")}
                  </p>
                ) : deadLine === "near" ? (
                  <p
                    className={
                      moment(TodoItem.deadLine).format("LLLL") ===
                      "Invalid date"
                        ? "no_time"
                        : "unCompleted_time_near"
                    }
                  >
                    {moment(TodoItem.deadLine).format("LLLL")}
                  </p>
                ) : (
                  <p
                    className={
                      moment(TodoItem.deadLine).format("LLLL") ===
                      "Invalid date"
                        ? "no_time"
                        : "unCompleted_time_far"
                    }
                  >
                    {moment(TodoItem.deadLine).format("LLLL")}
                  </p>
                )}
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
          <div className="overlay"></div>
          <EditItem closeEdit={setOpenEdit} TodoItem={TodoItem} />
          <div
            className={
              TodoItem.complete === true ? "Todo_complete" : "List_todo"
            }
          >
            <div className="Nav_list_todo">
              <img
                className="img_check"
                src={TodoItem.complete === true ? checked : unchecked}
                alt=""
                onClick={clickCheck}
              />
              {/* <input type="checkbox" onClick={clickCheck} className = 'checkCompleted' /> */}
              <div className="todo_and_time">
                <p
                  className={
                    TodoItem.complete === true ? "completed" : "unCompleted"
                  }
                >
                  {" "}
                  {TodoItem.title}
                </p>
                {deadLine === "late" ? (
                  <p
                    className={
                      moment(TodoItem.deadLine).format("LLLL") ===
                      "Invalid date"
                        ? "no_time"
                        : "unCompleted_timelate"
                    }
                  >
                    {moment(TodoItem.deadLine).format("LLLL")}
                  </p>
                ) : deadLine === "near" ? (
                  <p
                    className={
                      moment(TodoItem.deadLine).format("LLLL") ===
                      "Invalid date"
                        ? "no_time"
                        : "unCompleted_time_near"
                    }
                  >
                    {moment(TodoItem.deadLine).format("LLLL")}
                  </p>
                ) : (
                  <p
                    className={
                      moment(TodoItem.deadLine).format("LLLL") ===
                      "Invalid date"
                        ? "no_time"
                        : "unCompleted_time_far"
                    }
                  >
                    {moment(TodoItem.deadLine).format("LLLL")}
                  </p>
                )}
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
        <div
          className={TodoItem.complete === true ? "Todo_complete" : "List_todo"}
        >
          <div className="Nav_list_todo">
            <img
              className="img_check"
              src={TodoItem.complete === true ? checked : unchecked}
              alt=""
              onClick={clickCheck}
            />
            {/* <input type="checkbox" onClick={clickCheck} className = 'checkCompleted' color="black"/> */}
            <div className="todo_and_time">
              <p
                className={
                  TodoItem.complete === true ? "completed" : "unCompleted"
                }
              >
                {" "}
                {TodoItem.title}
              </p>
              {deadLine === "late" ? (
                <p
                  className={
                    moment(TodoItem.deadLine).format("LLLL") === "Invalid date"
                      ? "no_time"
                      : "unCompleted_time_late"
                  }
                >
                  {moment(TodoItem.deadLine).format("LLLL")}
                </p>
              ) : deadLine === "near" ? (
                <p
                  className={
                    moment(TodoItem.deadLine).format("LLLL") === "Invalid date"
                      ? "no_time"
                      : "unCompleted_time_near"
                  }
                >
                  {moment(TodoItem.deadLine).format("LLLL")}
                </p>
              ) : (
                <p
                  className={
                    moment(TodoItem.deadLine).format("LLLL") === "Invalid date"
                      ? "no_time"
                      : "unCompleted_time"
                  }
                >
                  {moment(TodoItem.deadLine).format("LLLL")}
                </p>
              )}
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
