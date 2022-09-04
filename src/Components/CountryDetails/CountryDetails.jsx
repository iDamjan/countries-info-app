import React, { useContext } from "react";
import { ContextApi } from "../../Contexts/Context-api";
import LoadingAni from "../../UI/LoadingAni";
import BackButton from "../../UI/BackButton";
import classes from "./CountryDetails.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CountryDetails() {
  const { countries, isLoading } = useContext(ContextApi);

  const [country, setCountry] = useState();
  const [borders, setBorders] = useState([""]);
  const { countryName } = useParams();

  useEffect(() => {
    const currentCountry = countries.find((c) => c.name.common === countryName);
    const currentBorders = currentCountry?.borders.map((border) => {
      const foundCountry = countries.find((c) => c.cca3 === border);
      const foundCountryName = foundCountry?.name.common;
      return foundCountryName;
    });

    setBorders(currentBorders);
    setCountry(currentCountry);
  }, [countries, countryName]);

  return (
    <div className={classes.container}>
      {isLoading && <LoadingAni />}
      {!isLoading && country && (
        <div>
          <BackButton />
          <section>
            <div className="image">
              <img src={country.flags.png} alt="flag" />
            </div>
            <div className={classes.details}>
              <h1>{country.name.common}</h1>
              <div className={classes["country-details"]}>
                <div className="country-details_one">
                  <p>{`Native name: ${Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].official)
                    .join(", ")}`}</p>
                  <p>{`Population: ${country.population}`}</p>
                  <p>{`Region: ${country.region}`}</p>
                  <p>{`Sub Region: ${country.subregion}`}</p>
                  <p>{`Capital: ${country.capital}`}</p>
                </div>
                <div className={classes["country-details_two"]}>
                  <p>{`Top level domain: ${country.tld[0]}`}</p>
                  <p>{`Currencies: ${Object.keys(country.currencies)
                    .map((key) => country.currencies[key].name)
                    .join(", ")}`}</p>
                  <p>{`Languages: ${Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}`}</p>
                </div>
              </div>
              <div className="border-countries ">
                <h2>Borders</h2>
                {borders.map((border, index) => (
                  <span key = {index} >{border}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
