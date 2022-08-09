import React from "react";
import MoonIcon from '../../store/icon-moon.svg'
import classes from './ColorMode.module.scss'

const ColorMode = () => {
    return(
        <div className={classes.colorMode}>
            <img src={MoonIcon} alt="Moon-icon" />
            <h2>Dark Mode</h2>
        </div>
    )
}

export default ColorMode;