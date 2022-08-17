import axios from "axios";

// export const axi

export const instance = axios.create({
    baseURL: "https://62e01876fa8ed271c47e4a70.mockapi.io",
    timeout: 5000,
    headers: { "X-Custom-Header": "foobar" },   
  });

// export const apiGetTodo = () => {
//     return instance.get(`/todos`)
// }

// export const apiAddTodo = (todo) => {
//     return instance.post(`/todos`, todo)
// }

// export const apiDeleteTodo = (id) => {
//     return instance.delete(`/todos/${id}`)
// }


// export const apiEditTodo = (todo) => {
//     return instance.put(`/todos/${todo.id}` ,{
//         title: todo.title,
//         complete: todo.complete,
//         deadLine: todo.deadLine
//     })
// }

// export const apiCheckTodo = (todo) => {
//     return instance.put(`/todos/${todo.id}` ,{
//         complete: !todo.complete,
//         deadLine: todo.deadLine
//     })
// }