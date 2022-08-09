import classes from "./SelectFilter.module.scss";

const SelectFilter = () => {
  return (
    <div className={classes.container}>
      <select name="region" id="region">
        <option value="" disabled selected hidden>
          Select by region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SelectFilter;
