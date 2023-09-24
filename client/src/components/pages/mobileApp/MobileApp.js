import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./MobileApp.module.css";
import Navigation from "../../navigation/Navigation";
import SocialIcon from "../../navigation/SocialIcon";
import ContactForm from "../../contactForm/ContactForm";
import Footer from "../../Footer/Footer";
import Subscription from "../../Subscription/Subscription";
import { mobileAppProcess } from "../../data/mobileAppProcess";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaAngleDown } from "react-icons/fa";
import AppCard from "../../mobileAppData/mobileData";
import AddBox from "../../AddBox/AddBox";
import MobileAppQuestion from "../../frequentlyQuestions/MobileAppQuestions";
import ScrollUp from "../../scrollUpWindow/ScrollUp";

const MobileApp = () => {
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
                <h1>Mobile App Development</h1>
                <p>
                  Rexett is a Sweden-based boutique, we are startup software
                  development company that offers Mobile Apps solutions.
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
                  <SwiperSlide>
                    <div className={classes.image1}></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={classes.image2}></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={classes.image3}></div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.home}>
          <div className={classes.homeHeading}>
            <h1>Mobile Application Development Company</h1>
            <p>
              <span className={classes.spanPara}>A</span>ccording to the
              existing current market day by day mobile users are increasing, so
              it is completely clear that Mobile App users also expanding
              quickly. Rexett is providing Mobile Application development
              solution with Android and iOS Applications development to provide
              great quality mobile apps for the society.
            </p>
            <p>
              Nowadays people spent their more time on mobile devices like
              Android smartphones, Tab, iPad and iPhone. People consistently
              downloading versatile applications for different reason. Mobile
              application is the most ideal way to make the day to day
              activities more easy like Food ordering, parcel delivery, Cab
              booking Services, Mobile Recharge, Railway Booking, Hotel booking,
              Travel booking Venue booking, Educational Apps for their different
              needs with Android and iOS Applications development. Our
              developers in Rexett are able to create highly customized mobile
              applications for consumer needs and enterprises.
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
        <div className={classes.ChooseSection}>
          <div className={classes.chooseHeading}>
            <h1>
              <span>G</span>et More Insight To Mobile App Development
            </h1>
          </div>
          <AppCard />
        </div>
        <AddBox />
        <div className={classes.processSection}>
          <div className={classes.processHeading}>
            <h1>
              <span>M</span>obile App Development Process
            </h1>
          </div>
          <div className={classes.uiSection}>
            <div className={classes.uiImage}></div>
            <div className={classes.uiHeading}>
              {mobileAppProcess.map((data) => (
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
        <MobileAppQuestion />
        <div className={classes.contactForm}>
          <ContactForm />
        </div>
        <Subscription />
        <Footer />
      </main>
    </>
  );
};
export default MobileApp;
