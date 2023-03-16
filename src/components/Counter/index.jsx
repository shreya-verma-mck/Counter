import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counterContainer">
      <p className="counterValue">{counter}</p>
      <div className="counterButtonContainer">
        <button
          type="button"
          data-testid="increment"
          className="counterButton"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counterButton"
          data-testid="decrement"
          onClick={() => {
            if (counter > 1) {
              setCounter(counter - 1);
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
