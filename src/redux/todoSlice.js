import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../api/Api";
import { toast } from "react-toastify";

export const getTodoThunk = createAsyncThunk("todos/gettodothunk", async () => {
  const response = await instance.get("/todos");
  return response.data;
});

export const addTodoThunk = createAsyncThunk('todos/addtodothunk' ,async(todo) => {
    await instance.post("/todos", todo);
    const response = await instance.get("/todos");
    return response.data;
})

export const deleteTodoThunk = createAsyncThunk('todos/deletetodothunk' ,async(id)=>{
    await instance.delete(`/todos/${id}`)
    const response = await instance.get("/todos");
    return response.data;
})

export const checkTodoThunk = createAsyncThunk('todos/checktodothunk', async(todo) => {
    await instance.put(`/todos/${todo.id}`, {
        complete: !todo.complete,
        deadLine: todo.deadLine
    })
    const response = await instance.get("/todos");
    return response.data;
})

export const editTodoThunk = createAsyncThunk('todos/edittodothunk', async(todo) => {
    await instance.put(`todos/${todo.id}`, {
        title: todo.title,
        complete: todo.complete,
        deadLine: todo.deadLine
    })
    const response = await instance.get("/todos");

    return response.data
})



export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodoThunk.fulfilled, (state, action) => {
        toast.success("get success", {autoClose: 1000});
        return action.payload;
      })
      .addCase(getTodoThunk.rejected, () => {
        toast.error("get data fail",{autoClose: 1000});
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
          toast.success("add success", {autoClose: 1000});
          return action.payload
      })
      .addCase(addTodoThunk.rejected, () => {
        toast.error("add data fail",{autoClose: 1000});
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) =>{
          toast.success('delete success', {autoClose: 1000})
          return action.payload
        })
        .addCase(deleteTodoThunk.rejected, () =>{
            toast.success('delete data fail', {autoClose: 1000})
        })
        .addCase(editTodoThunk.fulfilled, (state, action)=>{
            toast.success('edit success', {autoClose: 1000})
          return action.payload

        })
        .addCase(editTodoThunk.rejected, () => {
            toast.success('edit fail', {autoClose: 1000})
        })
        .addCase(checkTodoThunk.fulfilled, (state, action) => {
            // toast.success('check success', {autoClose: 1000})
            return action.payload
        })
  },
});

export default todoSlice.reducer;
