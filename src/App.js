import React, {useEffect} from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import TodoList from "./components/Todos/todoItems/TodoList/TodoList";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTodoThunk } from "./redux/todoSlice";
import { useDispatch } from "react-redux";




function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const [filterState, setFilterState] = React.useState("All");
  
  useEffect(() => {
    dispatch(getTodoThunk(todos))
  },[])
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
