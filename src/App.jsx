import { useState } from "react";
import CreateComponent from "./components/02_Components/01_CreateComponent";
import ComponentName from "./components/02_Components/02_ComponentName";
import Counter, { HOCblue, HOCred, HOCyellow } from "./components/02_Components/03_HOC";
import Pure_Components_useMemo from "./components/02_Components/04_Pure_Components_useMemo";
import Syntax from "./components/01_JSX/01_Syntax";


function App() {
  const [name, setName] = useState("Kapil")
  return (
    <>
      
      {/* JSX */}
      {/* <Syntax /> */}
      {/* <MultipleJSX /> */}
      
      {/* <InjectionAttack /> */}
      {/* <PrintFalsyValues /> */}
      
      
      {/* Components */}
      {/* <CreateComponent name={name}/>
      <ComponentName /> */}

      <HOCred cmp = {Counter} />
      <HOCblue cmp = {Counter} />
      <HOCyellow cmp = {Counter} />

      
      <Pure_Components_useMemo />
      
    </>
  );
}

export default App;
