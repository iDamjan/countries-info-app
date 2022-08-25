import Card from "./Card/Card";
import classes from "./Countries.module.scss";
import { useContext } from "react";
import { ContextApi } from "../../Contexts/Context-api";
import LoadingAni from "../../UI/LoadingAni";

const Countries = () => {
  const ctxAPI = useContext(ContextApi);
  console.log(ctxAPI.cardData)

  return (
    <div className={classes.main}>
      {ctxAPI.isLoading ? (
        <LoadingAni />
      ) : (
        <div className={classes.container}>
          {ctxAPI.cardData
            .filter((country) => {
              if (ctxAPI.searchFilter === "") {
                return country;
              } else if (
                country.name.common
                  .toLowerCase()
                  .includes(ctxAPI.searchFilter.toLowerCase())
              ) {
                return country;
              }
            })
            .filter((country) => {
              if (ctxAPI.selectFilter === "ALL") {
                return country;
              } else if (
                country.region.toLowerCase() ===
                ctxAPI.selectFilter.toLowerCase()
              ) {
                return country;
              }
            })
            .map((item) => (
              <Card
                country={item.name.common}
                region={item.region}
                capital={item.capital}
                population={item.population}
                image={item.flags.png}
                key={Math.random()}
                index = {ctxAPI.cardData.indexOf(item)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
