import React, { useContext } from "react";
import { ContextApi } from "../../Contexts/Context-api";
import LoadingAni from "../../UI/LoadingAni";
import BackButton from "../../UI/BackButton";
import classes from "./CountryDetails.module.scss";
import { useParams } from "react-router-dom";

export default function CountryDetails() {
  const ctx = useContext(ContextApi);
  const CountryData = ctx.cardData;

  const params = useParams();
  const index = params.countryId;
  const currentCountry = CountryData[index];

  let currencies = [""];
  let languages = [""];
  let NativeName = [""]

  if (!ctx.isLoading) {

    const currenciesArray = Object.values(currentCountry.currencies);
    currenciesArray.map((curencie) => {
      currencies.push(curencie.name);
    });
    currencies.splice(0, 1);

    const languagesArray = Object.values(currentCountry.languages);
    languagesArray.map((language) => {
      languages.push(language);
    });
    languages.splice(0, 1)

   const nativeNameArray = (Object.values(currentCountry.name.nativeName))
   nativeNameArray.map(name => {
    NativeName.push(name.official)
   })
   NativeName.splice(0, 1)
  }

  return (
    <div className={classes.container}>
      {ctx.isLoading ? (
        <LoadingAni></LoadingAni>
      ) : (
        <div>
          <BackButton />
          <section>
            <div className="image">
              <img src={currentCountry.flags.png} alt="flag" />
            </div>
            <div className={classes.details}>
              <h1>{currentCountry.name.common}</h1>
              <div className={classes['country-details']}>
                <div className="country-details_one">
                  <p>{`Native name: ${NativeName}`}</p>
                  <p>{`Population: ${currentCountry.population}`}</p>
                  <p>{`Region: ${currentCountry.region}`}</p>
                  <p>{`Sub Region: ${currentCountry.subregion}`}</p>
                  <p>{`Capital: ${currentCountry.capital}`}</p>
                </div>
                <div className={classes['country-details_two']}>
                  <p>{`Top level domain: ${currentCountry.tld[0]}`}</p>
                  <p>{`Currencies: ${currencies}`}</p>
                  <p>{`Languages: ${languages}`}</p>
                </div>
              </div>
              <div className="border-countries ">
                <h2>Border Countries</h2>
                <span>Iraq</span>
                <span>dwadwa</span>
                <span>dwada</span>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
