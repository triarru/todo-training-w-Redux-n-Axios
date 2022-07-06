import axios from "axios";
import { ITodo } from "../redux/store";

export const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export const getTodoAPI = () => {
  return instance.get(`/todos`);
};

export const addTodoAPI = (todos: ITodo) => {
  return instance.post(`/todos`, todos);
};

export const deleteTodoAPI = (id: number) => {
  return instance.delete(`/todos/${id}`);
};

export const updateTodoAPI = (todo: ITodo) => {
  return instance.put(`/todos/${todo.id}`, {
    id: todo.id,
    name: todo.name,
    isCompleted: !todo.isCompleted,
    deadline: todo.deadline,
  });
};
