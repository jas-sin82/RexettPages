import React, { useEffect } from "react";
import Navigation from "../../navigation/Navigation";
import classes from "./About.module.css";
import SocialIcon from "../../navigation/SocialIcon";
import ContactForm from "../../contactForm/ContactForm";
import Footer from "../../Footer/Footer";
import Subscription from "../../Subscription/Subscription";
import Mission from "../../Mission/Mission";
import ChooseUs from "../../WhyChooseUs/ChooseUs";
import { useLocation } from "react-router-dom";
import AddBox from "../../AddBox/AddBox";
import Questions from "../../frequentlyQuestions/Questions";
import ScrollUp from "../../scrollUpWindow/ScrollUp";

const AboutUs = () => {
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <>
      <main>
        <Navigation />
        <ScrollUp />
        <div className={classes.heroImageHead}>
          <div className={classes.heroImage}>
            <SocialIcon />
            <div className={classes.heroText}>
              <h1>About us</h1>
              <p>
                Rexett is a Sweden-based boutique, we are startup software
                development company that offers technical solutions for
                real-world business problems.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.home}>
          <div className={classes.homeHeading}>
            <h1>Our Story</h1>
            <p>
              <span className={classes.spanPara}>R</span>exett founded by
              experienced and graduated software developers with the exceptional
              passion & long vision. After working all these years as
              developers, we decided to build our own product as Rexett to serve
              our customers. We are incredibly ambitious — we left our comfort
              zone when we started this journey and now on rexett we are ready
              to offers customized solutions based on the expectations of the
              clients and the products will be delivered with high quality at
              cost effective rates and at specified times.
            </p>
            <p>
              We are 100% remotely, working with remote software developers
              offers numerous benefits, from increased productivity, flexibility
              and access to global talent.
            </p>
            <p>
              As a web development & mobile application company, our mission is
              to provide customer-centric, result-oriented, cost-competitive
              innovative & functional IT Solutions to our valuable global
              clients.
            </p>
          </div>
          <div className={classes.homeImage}></div>
        </div>
        <div className={classes.processSection}>
          <div className={classes.processHeading}>
            <h1>
              <span>O</span>ur Mission
            </h1>
            <p>
              We stick to the following principles in delivering our mission
            </p>
          </div>
          <Mission />
        </div>
        <div className={classes.ChooseSection}>
          <div className={classes.chooseHeading}>
            <h1>
              <span>W</span>hy Choose Us
            </h1>
          </div>
          <ChooseUs />
        </div>
        <AddBox />
        <div className={classes.addBox}>
          <Questions />
        </div>
        <ContactForm />
        <Subscription />
        <Footer />
      </main>
    </>
  );
};
export default AboutUs;
