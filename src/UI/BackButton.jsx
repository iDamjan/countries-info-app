import React from "react";
import arrow from "../store/arrow-back-outline.svg";
import classes from "./BackButton.module.scss";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to="/home" className={classes.container}>
      <img src={arrow} alt="" />
      <i>back</i>
    </Link>
  );
}
