import React, { useState } from "react";
import classes from "./Navigation.module.css";
import NavLinks from "./NavLinks";
import MobileNavigation from "./MobileNavigation";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const onChangeMenuCloseHandler = () => {
    setMenuBar(false);
  };
  const onChangeMenuOpenHandler = () => {
    setMenuBar(true);
  };

  const navColorHandler = () => {
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", navColorHandler);

  return (
    <>
      <header>
        <nav
          className={
            navColor
              ? `${classes.navBar} ${classes.navBarActive}`
              : `${classes.navBar}`
          }
        >
          <div className={classes.logoImage}>
            <Link to="/">
              <span className={classes.faChart}>
                <i className="fa-brands fa-artstation"></i>
              </span>{" "}
              Rexett
            </Link>
          </div>
          <NavLinks />
          <MobileNavigation
            menuBar={menuBar}
            onChangeMenuOpenHandler={onChangeMenuOpenHandler}
            onChangeMenuCloseHandler={onChangeMenuCloseHandler}
          />
        </nav>
      </header>
    </>
  );
};
export default Navigation;
