/*
    Why should component names start with capital letter?

    If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

    function SomeComponent {
        // Code goes here
    }

    You can define function component whose name starts with lowercase letter, but when it's imported it should have a capital letter. Here lowercase is fine:

    function myComponent {
        render() {
        return <div />;
     }
    }

    export default myComponent;

    But when imported in another file it should start with capital letter:

    import MyComponent from "./myComponent";


    Error: 
    Warning: The tag <componentName> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter. Error Component Stack
*/

const componentName = () => {
    return (
        <div>
            <h1>{"This is component Name"}</h1>
        </div>
    )
}

export default componentName;