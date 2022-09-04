import Card from "./Card/Card";
import classes from "./Countries.module.scss";
import { useContext } from "react";
import { ContextApi } from "../../Contexts/Context-api";
import LoadingAni from "../../UI/LoadingAni";

const Countries = () => {
  const { countries, selectFilter, searchFilter, isLoading } =
    useContext(ContextApi);

  const filterCountriesHandler = () => {
    return (
    countries?.filter((country) => {
      if (searchFilter === "") {
        return country;
      } else if (
        country.name.common
          .toLowerCase()
          .includes(searchFilter.toLowerCase())
      ) {
        return country;
      }
    })
    .filter((country) => {
      if (selectFilter === "ALL") {
        return country;
      } else if (
        country.region.toLowerCase() ===
        selectFilter.toLowerCase()
      ) {
        return country;
      }
     } )
)};

  return (
    <div className={classes.main}>
      {isLoading ? (
        <LoadingAni />
      ) : (
        <div className={classes.container}>
          {filterCountriesHandler().map((item, index) => (
            <Card
              country={item.name.common}
              region={item.region}
              capital={item.capital}
              population={item.population}
              image={item.flags.png}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
