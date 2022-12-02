import React, { useContext } from "react";
import { ContextApi } from "../../Contexts/Context-api";
import LoadingAni from "../../UI/LoadingAni";
import BackButton from "../../UI/BackButton";
import classes from "./CountryDetails.module.scss";
import { useGetCurrentCountryDetails } from "../hooks/useGetCurrentCountryDetails";
import { useNavigate } from "react-router-dom";

export default function CountryDetails() {

  const navigate = useNavigate();
  const { isLoading } = useContext(ContextApi);
  
  //CUSTOM HOOK FOR GETING CURRENT CLICKED COUNTRY DETAILS
  const { borders, country } = useGetCurrentCountryDetails();

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
              <div>
                <h2>Borders</h2>
                <div className={classes["border-countries"]}>
                  {borders !== "No borders avaliable for this country"  ? (
                    borders.map((border, index) => (
                      <p onClick = {() => navigate(`/home/country-detail/${border}`)}key={index}>{border}</p>
                    ))
                  ) : (
                    <span>{borders}</span>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
