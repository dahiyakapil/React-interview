/*
    A Stateless Component is a simple function that accepts props and returns JSX to render UI elements. These components do not manage internal state or lifecycle methods and primarily focus on rendering the user interface based on the data provided through props.

*/


const Stateless_Component = ({ name, age }) => {
    return (
      <div>
        <h1>{`My name is ${name} and age is: ${age}`}</h1>
      </div>
    );
  };
  
  export default Stateless_Component;