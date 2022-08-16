import React, { useEffect } from "react";
import { useState } from "react";

export const ContextApi = React.createContext({
  cardData: [],
});

export const ContextProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState("");
  const [selectFilter, setSelectFilter] = useState("ALL");

  const CountriesData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    setCardData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    CountriesData();
  }, []);

  return (
    <ContextApi.Provider
      value={{
        cardData,
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
