import React, { useContext } from "react";
import Logo from "./Logo";
import ColorMode from "./ColorMode";
import classes from "./Header.module.scss";

const Header = ({ setTheme, theme }) => {
  return (
    <div className={classes.header}>
      <Logo />
      <ColorMode setTheme ={setTheme} theme = {theme} />
    </div>
  );
};

export default Header;
