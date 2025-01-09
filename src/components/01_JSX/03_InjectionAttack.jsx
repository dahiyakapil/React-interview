import React from "react";

const InjectionAttack = () => {
  // Simulating a response object with potentially malicious input
  const response = {
    potentiallyMaliciousInput: "<script>alert('Injected!')</script>",
  };

  // Accessing the potentially malicious input
  const name = response.potentiallyMaliciousInput;

  // JSX will escape this value, rendering it as plain text
  const element = <h1>{name}</h1>;

  return (
    <div>
      <h2>Demonstrating Safe JSX Rendering</h2>
      <p>
        Below is content dynamically inserted from a simulated response. Any
        malicious input will be safely rendered as text:
      </p>
      {element}
    </div>
  );
};

export default InjectionAttack;
