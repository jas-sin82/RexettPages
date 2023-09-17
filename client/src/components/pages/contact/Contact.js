import React, { useEffect } from "react";
import classes from "./Contact.module.css";
import Navigation from "../../navigation/Navigation";
import SocialIcon from "../../navigation/SocialIcon";
import wave from "../../../images/waves.svg";
import ContactForm from "../../contactForm/ContactForm";
import Footer from "../../Footer/Footer";
import Subscription from "../../Subscription/Subscription";
import ScrollUp from "../../scrollUpWindow/ScrollUp";
import {
  FaPhone,
  FaEnvelopeSquare,
  FaSmileWink,
  FaEnvelopeOpenText,
  FaMailBulk,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  let day = weekday[date.getUTCDay()];
  const localTime = date.getHours();
  const localMinutes = String(date.getMinutes()).padStart(2, "0");

  return (
    <main>
      <Navigation />
      <ScrollUp />
      <div className={classes.heroImageHead}>
        <div className={classes.heroImage}>
          <SocialIcon />
          <div className={classes.heroText}>
            <h1>Contact Us</h1>
          </div>
          <div className={classes.customShapeDividerBottom1688657783}>
            <img src={wave} alt="waverImage" />
          </div>
        </div>
      </div>
      <div className={classes.home}>
        <div className={classes.homeHeading}>
          <div className={classes.cards}>
            <div className={classes.cardSectionLeft}>
              <span className={classes.smileyCircle}>
                <span className={classes.smiley}>
                  <FaSmileWink />
                </span>
              </span>
              <h2>Take The First Step Towards Greatness.</h2>
              <p>Want to find out how Rexett can help your business to grow.</p>
              <p className={classes.companyNumber}> +46 70-482-0780</p>
              <p className={classes.companyNumber}> +46 70-008-4502</p>
              <p>
                We're here to help your buisness and answer any question you
                might have. we look forward to hear from you.
              </p>
              <p className={classes.extra}>
                For further queries Please fill in the form below
              </p>
            </div>
          </div>
        </div>
        <div className={classes.homeHeading}>
          <div className={classes.cards}>
            <div className={classes.cardSectionLeftCenter}>
              <span className={classes.envelopeCircle}>
                <span className={classes.envelope}>
                  <FaEnvelopeOpenText />
                </span>
              </span>
              <h2>Get in touch to discuss your project, request a quote.</h2>
              <p className={classes.emailQuote}>
                {" "}
                Email us:- services@rexett.com
              </p>
              <p>We will get back to you within one Business Day!</p>
              <p>
                We're here to help your buisness and answer any question you
                might have. we look forward to hear from you.
              </p>
              <p className={classes.extra}>
                For further queries Please fill in the form below
              </p>
            </div>
          </div>
        </div>
        <div className={classes.homeHeading}>
          <div className={classes.cards}>
            <div className={classes.cardSection}>
              <span className={classes.mailBulkCircle}>
                <span className={classes.mailBulk}>
                  <FaMailBulk />
                </span>
              </span>
              <h2>Custom Website Development Company in Sweden.</h2>
              <p>
                Current Local Time in Gothenburg, Sweden {day} {localTime}:
                {localMinutes} (CET)
              </p>
              <p className={classes.proposal}>
                "Contact us if you have a fantastic project proposal, and we’ll
                carry out your project to the desired heights!"
              </p>
              <table>
                <tr>
                  <th>Working Day</th>
                  <th>Open</th>
                  <th>Close</th>
                </tr>
                <tr>
                  <td>Monday - Friday</td>
                  <td>09:00</td>
                  <td>17:00</td>
                </tr>
              </table>
              <p className={classes.phone}>
                <span className={classes.phoneCircle}>
                  <span className={classes.iconPhone}>
                    <FaPhone />
                  </span>
                </span>
                Call us Directly at
                <p className={classes.phoneNumber}>+46 70-482-0780</p>
                <p className={classes.phoneNumber}>+46 70-008-4502</p>
              </p>
              <p className={classes.mail}>
                <span className={classes.mailCircle}>
                  <span className={classes.iconMail}>
                    <FaEnvelopeSquare />
                  </span>
                </span>
                Email Us
                <p className={classes.email}>services@rexett.com</p>
              </p>
              <p className={classes.extra}>
                For further queries Please fill in the form below
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.contactForm}>
        <ContactForm />
      </div>
      <Subscription />
      <Footer />
    </main>
  );
};

export default Contact;
