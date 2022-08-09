import React from "react";
import Logo from "./Logo";
import ColorMode from "./ColorMode";
import classes from './Header.module.scss'

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <ColorMode />
    </div>
  );
};

export default Header;
