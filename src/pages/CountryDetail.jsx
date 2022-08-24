import React from "react";
import Header from "../Components/Header/Header";
import CountryDetails from "../Components/CountryDetails/CountryDetails";
import { ContextProvider } from "../Contexts/Context-api";

export default function CountryDetail() {
  return (
    <ContextProvider>
      <Header />
      <CountryDetails />
    </ContextProvider>
  );
}
