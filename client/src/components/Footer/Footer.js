import React, { useEffect } from "react";
import classes from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  // const openInNewTab = (url) => {
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <footer className={classes.footer}>
      <div className={classes.copyRight}>
        <p>copyright © rexett {currentYear}.</p>
        <p>All Rights Reserved | Designed by Rexett IT</p>
      </div>
      <div className={classes.footerContainer}>
        <div className={classes.footerLogo}>
          <h1>Rexett </h1>
          <span className={classes.faChart}>
            <i class="fa-brands fa-artstation"></i>
          </span>{" "}
        </div>
        <div className={classes.footerService}>
          <h2>Services</h2>
          <ul>
            <li>
              <Link
                to="/service/webdevelopment"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                to="/service/webdesign"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Web Design
              </Link>
            </li>
            <li>
              <Link
                to="/service/mobileapp"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link
                to="/service/ecommerce"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Ecommerce Development
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.footerCompany}>
          <h2>Company</h2>
          <ul>
            <li>
              <Link
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.footerPolicy}>
          <ul>
            <li>
              <Link
                to="/policy"
                // onClick={() => openInNewTab("/policy")}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {" "}
                Terms and Conditions
              </Link>
            </li>
            <li>
              <span className={classes.footerSocial}>
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
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
