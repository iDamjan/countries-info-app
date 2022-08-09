import SearchFilter from "./SearchFilter";
import SelectFilter from "./SelectFilter";
import classes from './Filter.module.scss'
const Filter = () => {
  return (
    <div className={classes.filterContainer}>
      <SearchFilter />
      <SelectFilter />
    </div>
  );
};

export default Filter;
