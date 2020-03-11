import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIncreaseCounter } from "./actions";
import "./App.css";

function App() {
  const counterVal = useSelector(state => state.counterVal);
  return (
    <div className="App">
      <div>{counterVal}</div>
      <button>Add</button>
    </div>
  );
}

export default App;
