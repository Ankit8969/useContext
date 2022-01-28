import React, { useState } from "react";
import First from "./first";

export const Checker = React.createContext();

const App = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const provider = {
    count: count,
    setCount: setCount,
    handleDecrement: handleDecrement,
    handleIncrement: handleIncrement,
  };
  return (
    <div>
      <Checker.Provider value={provider}>
        <First />
      </Checker.Provider>
    </div>
  );
};

export default App;
