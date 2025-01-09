import React from "react";

const PrintFalsyValues = () => {
  const values = [false, null, undefined, 0, NaN, ""];

  return (
    <div>
      <h2>Falsy Values in JSX</h2>
      <ul>
        {values.map((value, index) => (
          <li key={index}>
            {value === 0 || value ? value.toString() : String(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrintFalsyValues;
