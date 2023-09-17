import React from "react";
import classes from "./SocialIcon.module.css";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialIcon = () => {
  return (
    <>
      <div className={classes.icon}>
        <a
          className={classes.linkedin}
          href="https://www.linkedin.com/in/rexett-it-0b8648291/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <FaLinkedinIn />
          </span>
        </a>
        <a
          className={classes.facebook}
          href="https://www.facebook.com/profile.php?id=61551469043976&mibextid=D4KYlr"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <span>
            <FaFacebook />
          </span>
        </a>
        <a
          className={classes.instagram}
          href="https://www.instagram.com/rexettit/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <FaInstagram />
          </span>
        </a>
      </div>
    </>
  );
};

export default SocialIcon;
