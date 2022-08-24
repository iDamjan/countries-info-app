import React, { useContext } from "react";
import { ContextApi } from "../../Contexts/Context-api";
import LoadingAni from "../../UI/LoadingAni";
import BackButton from "../../UI/BackButton";
import classes from './CountryDetails.module.scss'

export default function CountryDetails() {
  const ctx = useContext(ContextApi);
  const CountryData = ctx.cardData;

  return (
    <div className={classes.container}>
      {ctx.isLoading ? (
        <LoadingAni></LoadingAni>
      ) : (
        <div>
          <BackButton />
          <section>
            <div className="image">
              <img src={CountryData[0].flags.png} alt="" />
            </div>
            <div className={classes.details}>
              <h1>{CountryData[0].name.common}</h1>
              <div className={classes.countryDetails}>
                <div className="country-details_one">
                  <p>Native Name: Belgie</p>
                  <p>Popilation:11111</p>
                  <p>Regiuon: Europe</p>
                  <p>Sub region: Western europe</p>
                  <p>Capital: Brussels</p>
                </div>
                <div className="country-details_two">
                  <p>Native Name: Belgie</p>
                  <p>Popilation:11111</p>
                  <p>Languages: Dutch, French, German </p>
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
