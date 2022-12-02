import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextApi } from "../../Contexts/Context-api";

export const useGetCurrentCountryDetails = () => {

  const { countries } = useContext(ContextApi);
  const [country, setCountry] = useState();
  const [borders, setBorders] = useState([""]);
  const { countryName } = useParams();

  useEffect(() => {
    
    const currentCountry = countries.find((c) => c.name.common === countryName);
    if (currentCountry?.borders) {
      const currentBorders = currentCountry?.borders.map((border) => {
        const foundCountry = countries.find((c) => c.cca3 === border);
        const foundCountryName = foundCountry?.name.common;
        return foundCountryName;
      });
      setBorders(currentBorders);
    } else setBorders("No borders avaliable for this country");

    setCountry(currentCountry);
  }, [countries, countryName]);

  return { country, borders };
};
