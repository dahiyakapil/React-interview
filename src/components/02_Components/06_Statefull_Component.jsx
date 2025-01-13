/*
    A stateful component is a component that maintains its own internal state and can modify that state over time. Stateful components are typically used to handle dynamic behavior, interactions, or data that changes over time (e.g., form inputs, counters, or UI updates based on user actions).

    In React, state refers to data that changes and needs to trigger a re-render when it changes
*/
import { useState } from "react";

const Statefull_Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>StateFull Component</h2>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1)
        }}
      >
        Update Component
      </button>
    </div>
  );
};

export default Statefull_Component;
