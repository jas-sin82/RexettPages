import React, { useState } from "react";
import classes from "./Questions.module.css";
import { FaAngleDown } from "react-icons/fa";
import { WebDesignQuestions } from "../data/webDesignQuestions";

const WebDesignQuestion = () => {
  const [dropDown, setDropDown] = useState({});

  const dropDownHandler = (title) => {
    setDropDown({
      ...dropDown,
      [title]: !dropDown[title],
    });
  };
  return (
    <>
      <div className={classes.processSection}>
        <div className={classes.processHeading}>
          <h1>
            <span>F</span>requently Asked Questions
          </h1>
        </div>
        <div className={classes.uiSection}>
          <div className={classes.uiHeading}>
            {WebDesignQuestions.map((data) => (
              <div className={classes.designProcess} key={data.id}>
                <div
                  onClick={() => dropDownHandler(data.title)}
                  className={
                    dropDown[data.title]
                      ? `${classes.active}`
                      : `${classes.noActive}`
                  }
                >
                  <span>Q</span>
                  {data.title}
                  <FaAngleDown
                    className={
                      dropDown[data.title]
                        ? `${classes.arrowUp} ${classes.active}`
                        : `${classes.arrowDown}`
                    }
                  />
                </div>
                {dropDown[data.title] && <div>{data.description}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDesignQuestion;
