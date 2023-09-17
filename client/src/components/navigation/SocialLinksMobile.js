import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import classes from "./SocialLinksMobile.module.css";

const SocialLinksMobile = () => {
  return (
    <>
      <div className={classes.iconMobile}>
        <a
          href="https://www.linkedin.com/in/rexett-it-0b8648291/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <FaLinkedinIn />
          </span>
        </a>
        <a
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
export default SocialLinksMobile;
