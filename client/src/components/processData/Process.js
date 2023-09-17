import React from "react";
import { dataProcess } from "../data/DataProcess";
import classes from "./Process.module.css";

const ProcessCard = () => {
  return (
    <>
      <div className={classes.cards}>
        {dataProcess.map((card) => (
          <div key={card.id} className={classes.cardSection}>
            <h1>{card.number}</h1>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProcessCard;
