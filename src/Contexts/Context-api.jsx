import React, { useEffect } from "react";
import { useState } from "react";

export const ContextApi = React.createContext({
  countries: [],
});

export const ContextProvider = ({ children }) => {

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectFilter, setSelectFilter] = useState("ALL");

  const CountriesData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
  };

  useEffect(() => {
    CountriesData();
  }, []);

  return (
    <ContextApi.Provider
      value={{
        countries: countries,
        isLoading,
        searchFilter,
        setSearchFilter,
        selectFilter,
        setSelectFilter,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
