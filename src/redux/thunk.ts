import { toast } from "react-toastify";
import * as actionsAPI from "../axios/todoAPI";
import * as actions from "./action";
import { ITodo } from "./store";

export const getTodoThunk = () => async (dispatch: any) => {
  try {
    const response = await actionsAPI.getTodoAPI();
    dispatch(actions.getTodo(response.data));
  } catch (error) {
    toast.error("Get data fail", { autoClose: 2000 });
  }
};

export const addTodoThunk = (todo: ITodo) => async (dispatch: any) => {
  try {
    await actionsAPI.addTodoAPI(todo);
    dispatch(getTodoThunk());
    dispatch(actions.addTodo(todo));
    toast.success("Add data success", { autoClose: 2000 });
  } catch (error) {
    dispatch(getTodoThunk());
    toast.error("Add data fail", { autoClose: 2000 });
  }
};

export const deleteTodoThunk = (id: number) => async (dispatch: any) => {
  try {
    await actionsAPI.deleteTodoAPI(id);
    dispatch(getTodoThunk());
    dispatch(actions.deleteTodo(id));
    toast.success("Delete data success", { autoClose: 2000 });
  } catch (error) {
    dispatch(getTodoThunk());
    toast.error("Delete data fail", { autoClose: 2000 });
  }
};

export const updateTodoThunk = (todo: ITodo) => async (dispatch: any) => {
  try {
    await actionsAPI.updateTodoAPI(todo);
    dispatch(getTodoThunk());
    dispatch(actions.updateTodo(todo));
    toast.success("Update data success", { autoClose: 2000 });
  } catch (error) {
    dispatch(getTodoThunk());
    toast.error("Update data fail", { autoClose: 2000 });
  }
};

export const checkTodoThunk = (todo: any) => async (dispatch: any) => {
  try {
    await actionsAPI.updateTodoAPI(todo);
    dispatch(getTodoThunk());
    dispatch(actions.checkTodo(todo));
    toast.success("Update data success", { autoClose: 2000 });
  } catch (error) {
    dispatch(getTodoThunk());
    toast.error("Update check data fail", { autoClose: 2000 });
  }
};
