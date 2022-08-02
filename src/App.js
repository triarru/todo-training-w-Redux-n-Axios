import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import TodoList from "./components/Todos/todoItems/TodoList/TodoList";
// import TodoItem from './components/Todos/todoItems/todoItem';
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";



function App() {
  const todos = useSelector((state) => state.todoList);
  const [filterState, setFilterState] = React.useState("All");
  // console.log(filterState)
  return (
    // tat ca cac thanh phan con deu co the ket noi den store
    <div className="App">
      <Header />
      <TodoList todos={todos} filterState={filterState} />
      <Footer setFilterState={setFilterState} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
