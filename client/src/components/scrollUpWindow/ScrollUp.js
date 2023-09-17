import React, { useEffect } from "react";
import classes from "./ScrollUp.module.css";
import { FaScroll } from "react-icons/fa";

const ScrollUp = () => {
  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScrollUp();
  }, []);

  return (
    <>
      <button className={classes.scrollUp} onClick={handleScrollUp}>
        <FaScroll className={classes.fascroll} />
      </button>
    </>
  );
};

export default ScrollUp;
