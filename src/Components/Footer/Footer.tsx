import { useDispatch } from "react-redux";
import { useState } from "react";
import { setFilter } from "../../redux/action";
import { EFilter } from "../../redux/store";
import "./Footer.css";

function Footer() {
  const dispatch = useDispatch();
  const [filterType, setFilterType] = useState("All");


  const filterAll = () => {
    dispatch(setFilter(EFilter.ALL));
    setFilterType("All");
  };

  const filterAct = () => {
    dispatch(setFilter(EFilter.ACTIVE));
    setFilterType("Active");
  };

  const filterCom = () => {
    dispatch(setFilter(EFilter.COMPLETE));
    setFilterType("Completed");
  };

  return (
    <div>
      <div className="filterBtn">
        <button
          onClick={filterAll}
          className={filterType === "All" ? "btn actbtn" : "btn"}
        >
          All
        </button>
        <button
          onClick={filterAct}
          className={filterType === "Active" ? "btn actbtn" : "btn"}
        >
          Active
        </button>
        <button
          onClick={filterCom}
          className={filterType === "Completed" ? "btn actbtn" : "btn"}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default Footer;
