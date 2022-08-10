import classes from "./SelectFilter.module.scss";
import { useContext } from "react";
import { ContextApi } from "../../Contexts/Context-api";

const SelectFilter = () => {
  const ctxAPI = useContext(ContextApi);
  const selectFilterHandler = (e) => {
    ctxAPI.setSelectFilter(e.target.value)
  }


  return (
    <div className={classes.container}>
      <select onChange = {selectFilterHandler} name="region" id="region">
        <option value="ALL" >
         ALL
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SelectFilter;
