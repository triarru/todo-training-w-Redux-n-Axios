import "./App.css";
import Header from "./components/Header/Header";
import Todo from "./components/ListTodos/Todo";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App_conten">
          <Header />
          <Todo />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
