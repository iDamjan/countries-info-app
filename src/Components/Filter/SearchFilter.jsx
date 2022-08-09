import searchIcon from '../../store/search-outline.svg'
import classes from './SearchFilter.module.scss'

const SearchFilter = () => {
    return(
        <div className={classes.container}>
            <img src={searchIcon} alt="search icon" />
            <input type="search" placeholder="Search for a country..." id = "searchInput"/>
        </div>
    )
}

export default SearchFilter;