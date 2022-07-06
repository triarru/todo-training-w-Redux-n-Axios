import "./App.css";

import { useEffect } from "react";

import TodoList from "./Components/TodoList/TodoList/TodoList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { getTodoThunk } from "./redux/thunk";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="todoApp container">
        <ToastContainer />
        <Header />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
