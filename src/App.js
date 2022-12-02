import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/home/country-detail/:countryName"
        element={<CountryDetail />}
      />
    </Routes>
  );
}

export default App;
