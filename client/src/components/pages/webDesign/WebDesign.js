import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./WebDesign.module.css";
import Navigation from "../../navigation/Navigation";
import SocialIcon from "../../navigation/SocialIcon";
import ContactForm from "../../contactForm/ContactForm";
import Footer from "../../Footer/Footer";
import Subscription from "../../Subscription/Subscription";
import { WebdesignData } from "../../data/webDesignData";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaAngleDown } from "react-icons/fa";
import UIServiecs from "../../UIServices/UIServices";
import AddBox from "../../AddBox/AddBox";
import WebDesignQuestion from "../../frequentlyQuestions/WebDesignQuestions";
import ScrollUp from "../../scrollUpWindow/ScrollUp";
import webDev from "../../../images/webdev10.png";
import mobileApp from "../../../images/mobile-app.png";
import ecommerce from "../../../images/eCommerce.png";

const data = [webDev, mobileApp, ecommerce];

const WebDesign = () => {
  const [dropDown, setDropDown] = useState({});
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  const dropDownHandler = (title) => {
    setDropDown({
      ...dropDown,
      [title]: !dropDown[title],
    });
  };

  return (
    <>
      <main>
        <Navigation />
        <ScrollUp />
        <div className={classes.heroImageHead}>
          <div className={classes.heroImage}>
            <SocialIcon />
            <div className={classes.heroSection}>
              <div className={classes.heroText}>
                <h1>UI & UX Design</h1>
                <p>
                  Rexett is a Sweden-based boutique, we are startup software
                  development company that offers Web & Mobile Apps UI/UX
                  Design.
                </p>
              </div>
              <div className={classes.hero}>
                <Swiper
                  speed={1000}
                  loop={true}
                  spaceBetween={1}
                  lazy="true"
                  slidesPerView={1}
                  grabCursor={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                  {data.map((image, index) => (
                    <SwiperSlide>
                      {" "}
                      <div key={index}>
                        <img src={image} alt="slider Images" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.home}>
          <div className={classes.homeHeading}>
            <h1>Web Design Company</h1>
            <p>
              <span className={classes.spanPara}>R</span>exett IT ensures to
              deliver custom website design services, globally! We are adept at
              designing responsive, fast-loading, and user-friendly websites
              that offer a consistent look and use across different web
              browsers. At Rexett, we consider web design to be one of the most
              crucial factors for any successful website. We justify every
              aspect of the design to ensure that each element is serving a
              specific purpose and that your website is truly designed to
              attract, retain and enhance the user experience. A fresh looking
              website makes your online presence more effective and helps in
              attracting new customers in this ever changing market and fierce
              competition.
            </p>
            <p>
              Web design is of utmost importance for any business. In most
              cases, it is the first point of contact for any business. It
              instantly portrays the company’s brand and message. Web-design
              impacts the positioning of your products & services in the
              consumers mind. A professionally designed website will not only
              help you attract new business but will also build more interest
              from your existing customers. A good web-design should involve the
              visitors emotionally with your products and services and
              ultimately lead to a sale.
            </p>
          </div>
          <div className={classes.homeImage}></div>
        </div>
        <div className={classes.ChooseSection}>
          <div className={classes.chooseHeading}>
            <h1>
              <span>W</span>e Deliver Comprehensive Website Design Services
            </h1>
          </div>
          <UIServiecs />
        </div>
        <AddBox />
        <div className={classes.processSection}>
          <div className={classes.processHeading}>
            <h1>
              <span>O</span>ur Web Design Process
            </h1>
          </div>
          <div className={classes.uiSection}>
            <div className={classes.uiImage}></div>
            <div className={classes.uiHeading}>
              {WebdesignData.map((data) => (
                <div className={classes.designProcess} key={data.id}>
                  <div onClick={() => dropDownHandler(data.title)}>
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
        <WebDesignQuestion />
        <div className={classes.contactForm}>
          <ContactForm />
        </div>
        <Subscription />
        <Footer />
      </main>
    </>
  );
};
export default WebDesign;
