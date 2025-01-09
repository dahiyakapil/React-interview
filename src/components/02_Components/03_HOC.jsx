import { useState } from "react";

export const HOCred = (props) => {
  return (
    <div>
      <h2 style={{ background: "red", width: " 150px", textAlign: "center" }}>
        <props.cmp />
      </h2>
    </div>
  );
};
export const HOCblue = (props) => {
  return (
    <div>
      <h2 style={{ background: "blue", width: " 150px", textAlign: "center" }}>
        <props.cmp />
      </h2>
    </div>
  );
};
export const HOCyellow = (props) => {
  return (
    <div>
      <h2
        style={{ background: "yellow", width: " 150px", textAlign: "center" }}
      >
        <props.cmp />
      </h2>
    </div>
  );
};
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
};

export default Counter;
