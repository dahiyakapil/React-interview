import React, { useMemo, useState } from "react";

const Pure_Components_useMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(5);

  const multiplyMemo = useMemo(function multiplyCountBy5() {
    console.log("Re-rendering multiplyCountBy5"); // it will re-renders unnecessarry... so to avoid to re-renders we have to use the useMemo hook
    return count * 5;
  }, [count]);

  return (
    <div>
      <h2>
        Pure Components Using useMemo Hook for website performance enhancement
      </h2>
      <h2>Count: {count}</h2>
      <h2>Item: {item}</h2>
      <h2>Mulitply Count By 5: {multiplyMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item + 1)}>Update Item</button>
    </div>
  );
};

export default Pure_Components_useMemo;
