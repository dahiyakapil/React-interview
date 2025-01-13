import { useState } from "react";
import CreateComponent from "./components/02_Components/01_CreateComponent";
import ComponentName from "./components/02_Components/02_ComponentName";
import Counter, { HOCblue, HOCred, HOCyellow } from "./components/02_Components/03_HOC";
import Pure_Components_useMemo from "./components/02_Components/04_Pure_Components_useMemo";
import Syntax from "./components/01_JSX/01_Syntax";
import Stateless_Component from "./components/02_Components/05_Stateless_Component";
import Statefull_Component from "./components/02_Components/06_Statefull_Component";


function App() {
  const [name, setName] = useState("Kapil")
  return (
    <>
      
      {/* JSX */}
      {/* <Syntax /> */}
      {/* <MultipleJSX /> */}
      
      {/* <InjectionAttack /> */}
      {/* <PrintFalsyValues /> */}
      
      {/* ----------- Component---------- */}
      {/* Components */}
      {/* <CreateComponent name={name}/>
      <ComponentName /> */}
      
      {/* 
      <HOCred cmp = {Counter} />
      <HOCblue cmp = {Counter} />
      <HOCyellow cmp = {Counter} /> */}

      
      {/* <Pure_Components_useMemo /> */}

      <Stateless_Component name="Kapil" age={22}/>
      <Statefull_Component />
      
    </>
  );
}

export default App;
