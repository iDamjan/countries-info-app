import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Navigate to ="/home" />} />
      <Route path="/home" element ={<Home />} />
      <Route path="/home/country-detail/:countryId" element = {<CountryDetail />} />
    </Routes>
  );
}

export default App;
