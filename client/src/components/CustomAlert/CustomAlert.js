import React from "react";
import classes from "./CustomAlert.module.css";

const CustomAlertSuccess = () => {
  return (
    <div>
      <p className={classes.alert}>Your message has been sent successfully!</p>
    </div>
  );
};

export default CustomAlertSuccess;
