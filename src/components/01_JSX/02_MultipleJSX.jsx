import React from "react";

const MultipleJSX = () => {
  const name = response.potentiallyMaliciousInput;
  const element = <h1>{name}</h1>;
  return (
    
    <div>
      <h1>Hey this h1</h1>
      <p>Hey this is para</p>
      <p>{element}</p>
    </div>
  );
};

export default MultipleJSX;
