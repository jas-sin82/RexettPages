import React, { useEffect, useState } from "react";
import Classes from "./Ecommerce.module.css";
import classes from "../webdevelopment/WebDevelopment.module.css";
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
import dataEcommerce from "../../data/ecommerceheader";
import EcommerceData from "../../ecommerceDevelopment/Ecommerce";
import EcommerceQuestion from "../../frequentlyQuestions/EcommerceQuestion";
import AddBox from "../../AddBox/AddBox";
import ScrollUp from "../../scrollUpWindow/ScrollUp";

const Ecommerce = () => {
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
            {dataEcommerce.map((data) => (
              <SwiperSlide>
                {" "}
                <div className={Classes.heroImageEcommerce} key={data.id}>
                  <img src={data.image} alt="slider Images" />

                  <div className={Classes.heroTextEcommerce}>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={classes.home}>
          <div className={classes.homeHeading}>
            <h1>ecommerce development services</h1>
            <p>
              <span className={classes.spanPara}>E</span>commerce development
              covers the design, building, and launch of an ecommerce website.
              It includes building both the solution’s frontend like product
              pages, a shopping cart, checkout forms, and support pages, and its
              backend infrastructure. Rexett creates feature-rich ecommerce
              solutions for companies of any size and business model to help
              them reach target audiences and grow revenue.
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
          <div className={Classes.homeImageEcommerce}></div>
        </div>
        <div className={classes.ChooseSection}>
          <div className={classes.chooseHeading}>
            <h1>
              <span>E</span>commerce Web Development solutions
            </h1>
          </div>
          <EcommerceData />
        </div>
        <AddBox />
        <div className={classes.processSection}>
          <div className={Classes.processHeadingEcommerce}>
            <h1>
              <span>O</span>ur Smart Approach For ecommerce Web Development
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
        <EcommerceQuestion />
        <div className={classes.contactForm}>
          <ContactForm />
        </div>
        <Subscription />
        <Footer />
      </main>
    </>
  );
};

export default Ecommerce;
