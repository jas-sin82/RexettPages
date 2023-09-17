import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MobileNavigation.module.css";
import SocialLinksMobile from "./SocialLinksMobile";
import {
  FaAngleDown,
  FaHome,
  FaUsers,
  FaHandsHelping,
  FaRegNewspaper,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import DropDownMobile from "./DropDownMobile";

const MobileNavigation = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const menuBar = props.menuBar;
  const closeHandler = props.onChangeMenuCloseHandler;
  const openHandler = props.onChangeMenuOpenHandler;

  return (
    <>
      {menuBar ? (
        <div className={classes.navListMobile}>
          <ul>
            <li className={`${classes.listMobile} ${classes.homePage}`}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/"
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li className={`${classes.listMobile} ${classes.aboutPage}`}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/about"
              >
                <FaUsers /> AboutUs
              </NavLink>
            </li>
            <li className={`${classes.listMobile} ${classes.servicePage}`}>
              <span className={showDropDown && classes.active}>
                <FaHandsHelping /> Services
                <FaAngleDown
                  className={
                    showDropDown
                      ? `${classes.arrowUp} ${classes.active}`
                      : `${classes.arrowDown}`
                  }
                  onClick={() => setShowDropDown(!showDropDown)}
                />
              </span>
            </li>
            {showDropDown && <DropDownMobile menuBar={closeHandler} />}
            <li className={`${classes.listMobile} ${classes.blogPage}`}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/blog"
              >
                <FaRegNewspaper /> Blog
              </NavLink>
            </li>
            <li className={`${classes.listMobile} ${classes.contactPage}`}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/contact"
              >
                <FaEnvelopeOpenText /> Contact
              </NavLink>
            </li>
            <li>
              <SocialLinksMobile />
            </li>
          </ul>
        </div>
      ) : null}

      {menuBar && (
        <div className={classes.mobileClose} onClick={closeHandler}>
          <i className="fas fa-times"></i>
        </div>
      )}
      {!menuBar && (
        <div className={classes.mobile} onClick={openHandler}>
          <i className="fas fa-bars"></i>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
