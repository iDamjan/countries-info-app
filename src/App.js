import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Countries from "./Components/Countries/Countries";
import { ContextProvider } from "./Contexts/Context-api";

function App() {

  // COLOR THEME STATE
  const [theme, setTheme] = useState("light")
  // COLOR THEME STATE

  return (
    <div className="app" data-theme={theme}>
      <ContextProvider>
        <Header setTheme = {setTheme} theme = {theme}/>
        <Filter />
        <Countries />
      </ContextProvider>
    </div>
  );
}

export default App;
