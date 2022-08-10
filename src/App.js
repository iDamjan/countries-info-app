import "./App.css";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Countries from "./Components/Countries/Countries";
import { ContextProvider } from "./Contexts/Context-api";
import { useState } from "react";

function App() {

  const [colorMode, setColorMode] = useState(false)

  return (
    <ContextProvider>
      <Header setColorMode = {setColorMode} colorMode ={colorMode}/>
      <Filter />
      <Countries />
    </ContextProvider>
  );
}

export default App;
