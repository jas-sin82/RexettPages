import React, { useEffect, useState } from "react";
import classes from "./WebDevelopment.module.css";
import Navigation from "../../navigation/Navigation";
import SocialIcon from "../../navigation/SocialIcon";
import ContactForm from "../../contactForm/ContactForm";
import Footer from "../../Footer/Footer";
import Subscription from "../../Subscription/Subscription";
import { WebDevelopmentProcess } from "../../data/webDevelopmentProcess";
import { useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import WebDevelopmentServices from "../../webDevelopmentServices/WebDevelopment";
import Questions from "../../frequentlyQuestions/Questions";
import AddBox from "../../AddBox/AddBox";
import ScrollUp from "../../scrollUpWindow/ScrollUp";

const WebDevelopment = () => {
  const [dropDown, setDropDown] = useState({});
  const { pathName } = useLocation();
  const dropDownHandler = (title) => {
    setDropDown({
      ...dropDown,
      [title]: !dropDown[title],
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return (
    <>
      <main>
        <Navigation />
        <ScrollUp />
        <div className={classes.heroImageHead}>
          <SocialIcon />
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={1000}
            loop={true}
            centeredSlides={true}
            lazy="true"
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              {" "}
              <div className={classes.heroImage}>
                <div className={classes.image8}></div>
                <div className={classes.heroText}>
                  <h1>Web Development Company</h1>
                  <p>
                    We design and develop high-grade websites that provide a
                    visually appealing and interactive web experience.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={classes.heroImage}>
                <div className={classes.image9}></div>
                <div className={classes.heroText}>
                  <h1>Providing the quality-assuring website solutions</h1>
                  <p>Delivering Right-To-The-Need Web Development Services</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={classes.home}>
          <div className={classes.homeHeading}>
            <h1>Web Development</h1>
            <p>
              <span className={classes.spanPara}>W</span>e design and develop
              high-grade websites that provide a visually appealing and
              interactive web experience. Working with the latest web
              technologies and tools, we build websites with high performance
              and security. Our developers create diverse solutions from
              websites to complex enterprise web applications. Professional and
              outstanding ideas of our passionate team makes us unique in every
              sense. From basic website to large complex websites, we create
              every website with love. Modern, user friendly designs with rich,
              interactive features, is what you can expect from us.
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
              <span>E</span>xtensive Range of Growth-Oriented Web Development
              Solutions
            </h1>
          </div>
          <WebDevelopmentServices />
        </div>
        <AddBox />
        <div className={classes.processSection}>
          <div className={classes.processHeading}>
            <h1>
              <span>O</span>ur Web Development Process
            </h1>
          </div>
          <div className={classes.uiSection}>
            <div className={classes.uiImage}></div>
            <div className={classes.uiHeading}>
              {WebDevelopmentProcess.map((data) => (
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
        <Questions />
        <div className={classes.contactForm}>
          <ContactForm />
        </div>
        <Subscription />
        <Footer />
      </main>
    </>
  );
};

export default WebDevelopment;
