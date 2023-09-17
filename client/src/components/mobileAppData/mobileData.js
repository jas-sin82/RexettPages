import React from "react";
import { appData } from "../data/appData";
import classes from "./mobileData.module.css";

const AppCard = () => {
  return (
    <>
      <div className={classes.cards}>
        {appData.map((card) => (
          <div key={card.id} className={classes.cardSection}>
            <img src={card.image} alt={card.title} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppCard;
