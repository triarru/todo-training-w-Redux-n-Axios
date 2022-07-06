import { useState } from "react";
import TodoInputs from "../TodoList/TodoInputs/TodoInputs";

import "./Header.css";
import addIcon from "../../assets/img/plus.png"

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleAddTodo = () => {
    let val = isButtonClicked;
    setIsButtonClicked(!val);
  };

  const onClickToClose = () => {
    let val = isButtonClicked;
    setIsButtonClicked(!val);
  };

  return (
    <div>
      <div className="todos">
        TODOS
        <div className="add">
          <img
            className="addBtn"
            alt=""
            src={addIcon}
            width={25}
            height={25}
            onClick={handleAddTodo}
          />
        </div>
      </div>
      <hr></hr>
      {isButtonClicked === true ? (
        <TodoInputs onClickToClose={onClickToClose} btnValue={"ADD"} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Header;
