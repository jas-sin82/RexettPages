import React, { useState } from "react";
import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";
import Dropdown from "./DropDown";
import { FaAngleDown } from "react-icons/fa";

const NavLinks = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      <div className={classes.navList}>
        <ul>
          <li className={classes.list}>
            <NavLink
              exact
              to="/"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li className={classes.list}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              About us
            </NavLink>
          </li>
          <li
            className={classes.list}
            onMouseEnter={() => setShowDropDown(true)}
            onMouseLeave={() => setShowDropDown(false)}
          >
            <NavLink
              to="/service/webdevelopment"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Services <FaAngleDown className={classes.arrowDown} />
            </NavLink>
            {showDropDown && <Dropdown />}
          </li>

          <li className={classes.list}>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Blog
            </NavLink>
          </li>
          <li className={classes.listContact}>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Discuss a Project
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
