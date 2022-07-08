// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
// import TodoForm from './components/TodoForm';

import { Provider } from "react-redux";
import store from "./store/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
