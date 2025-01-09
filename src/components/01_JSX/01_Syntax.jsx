/*
    What is jSX

    JSX stands for JavaScript XML and it is an XML like syntax extensiton to the ECMAScript.
    Basically it provides the syntactic sugar to the React.createElement().
    It allows you to write HTML-like code directly in JavaScript, which React then compiles into its underlying createElement calls.
*/

// const Syntax = () => {
//     return (
//         <div>
//             <h1>{"This is JSX CODE"}</h1>
//         </div>
//     )
// }

// export default Syntax;

import { createElement } from "react";

const Syntax = () => {
  return createElement(
    "h1",
    { className: "greetings" },
    "Hello from createElement"
  );
};

export default Syntax;
