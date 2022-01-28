import React, { useContext } from "react";
import { Checker } from "./App.js";

const Second = () => {
  const Check = useContext(Checker);
  const { count, setCount, handleIncrement, handleDecrement } = Check;
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={() => setCount(count + 1)}>SPECIAL</button>
    </div>
  );
};

export default Second;
