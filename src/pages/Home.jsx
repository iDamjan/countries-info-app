import { ContextProvider } from "../Contexts/Context-api";
import Filter from "../Components/Filter/Filter";
import Header from "../Components/Header/Header";
import Countries from "../Components/Countries/Countries";
import { useState } from "react";
import "../App.css";

function Home() {

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
  
  export default Home;