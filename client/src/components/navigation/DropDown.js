import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./DropDown.module.css";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={
          dropdown
            ? `${classes.dropDown} ${classes.clicked}`
            : `${classes.dropDown}`
        }
        onClick={() => setDropdown(!dropdown)}
      >
        <li className={classes.dropLink}>
          <NavLink
            onClick={() => setDropdown(false)}
            exact
            to="/service/webdesign"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            WebDesign
          </NavLink>
        </li>
        <li className={classes.dropLink}>
          <NavLink
            onClick={() => setDropdown(false)}
            to="/service/webdevelopment"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            WebDevelopment
          </NavLink>
        </li>
        <li className={classes.dropLink}>
          <NavLink
            onClick={() => setDropdown(false)}
            to="/service/mobileapp"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Mobile App
          </NavLink>
        </li>
        <li className={classes.dropLink}>
          <NavLink
            onClick={() => setDropdown(false)}
            to="/service/ecommerce"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Ecommerce
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
