import searchIcon from '../../store/search-outline.svg'
import classes from './SearchFilter.module.scss'
import { useContext } from 'react'
import { ContextApi } from '../../Contexts/Context-api'

const SearchFilter = () => {
    const ctxAPI = useContext(ContextApi)

    const searchFilterHandler = (e) => {
        ctxAPI.setSearchFilter(e.target.value)
    }

    return(
        <div className={classes.container}>
            <img src={searchIcon} alt="search icon" />
            <input onChange = {searchFilterHandler} type="search" placeholder="Search for a country..." id = "searchInput"/>
        </div>
    )
}

export default SearchFilter;