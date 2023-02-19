import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p data-testid="counterValue">{counter}</p>
      <button
        data-testid="plusButton"
        type="button"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button
        data-testid="minusButton"
        type="button"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
