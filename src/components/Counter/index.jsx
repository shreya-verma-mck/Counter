import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counterContainer">
      <p data-testid="counter-value" className="counterValue">
        {counter}
      </p>
      <div className="counterButtonContainer">
        <button
          data-testid="plus-button"
          type="button"
          className="counterButton"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <button
          data-testid="minus-button"
          type="button"
          className="counterButton"
          onClick={() => {
            if (counter > 1) {
              setCounter(counter - 1);
            } else {
              setCounter(0);
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
