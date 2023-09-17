import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DropDownMobile.module.css";

const DropDownMobile = (props) => {
  const menuBar = props.menuBar;

  return (
    <>
      {" "}
      <li className={classes.dropLinkMobile}>
        <NavLink
          onClick={menuBar}
          exact
          to="/service/webdesign"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          WebDesign
        </NavLink>
      </li>
      <li className={classes.dropLinkMobile}>
        <NavLink
          onClick={menuBar}
          to="/service/webdevelopment"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          WebDevelopment
        </NavLink>
      </li>
      <li className={classes.dropLinkMobile}>
        <NavLink
          onClick={menuBar}
          to="/service/mobileapp"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Mobile App
        </NavLink>
      </li>
      <li className={classes.dropLinkMobile}>
        <NavLink
          onClick={menuBar}
          to="/service/ecommerce"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Ecommerce
        </NavLink>
      </li>
    </>
  );
};

export default DropDownMobile;
