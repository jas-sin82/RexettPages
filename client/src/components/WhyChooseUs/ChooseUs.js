import React from "react";
import { chooseUs } from "../data/chooseUs";
import classes from "./ChooseUs.module.css";

const ChooseUs = () => {
  return (
    <>
      <div className={classes.cards}>
        {chooseUs.map((data, index) => (
          <div key={data.id} className={classes.cardSection}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChooseUs;
