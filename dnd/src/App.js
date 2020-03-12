import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIncreasedCounter } from "./actions";
import Button from "./component/Button";
import "./App.css";

function App() {
  const counterVal = useSelector(state => state.counterVal);
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(getIncreasedCounter(counterVal));
  };
  return (
    <div className="App" data-test="App">
      <div data-test="counterVal">{counterVal}</div>
      <Button onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
