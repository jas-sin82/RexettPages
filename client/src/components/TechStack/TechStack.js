import React from "react";
import classes from "./TechStack.module.css";
import jsLogo from "../../images/javascript.png";
import nodeLogo from "../../images/nodejs-logo.png";
import expressLogo from "../../images/express.png";
import bootstrapLogo from "../../images/bootstrap.png";
import canvaLogo from "../../images/Canva.png";
import mailChimpLogo from "../../images/mailchimp.png";
import mongodbLogo from "../../images/Mongodb.png";
import figmaLogo from "../../images/figma-vector-logo.png";
import nextLogo from "../../images/next-js-logo.png";
import reactNativeLogo from "../../images/react-native-logo.png";
import reduxLogo from "../../images/redux-logo.png";
import tailwindLogo from "../../images/tailwind-logo.png";
import apiLogo from "../../images/api-logo.png";
import magento from "../../images/magento.png";
import reactLogo from "../../images/react.png";
import woCommerce from "../../images/wo-commerce.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const techLogos = [
  jsLogo,
  reactLogo,
  nodeLogo,
  expressLogo,
  apiLogo,
  bootstrapLogo,
  canvaLogo,
  mailChimpLogo,
  mongodbLogo,
  figmaLogo,
  nextLogo,
  reactNativeLogo,
  reduxLogo,
  tailwindLogo,
  magento,
  woCommerce,
];

const TechStack = () => {
  return (
    <div className={classes.techContainer}>
      <h1> software stack we use</h1>
      <div className={classes.techStack}>
        <Swiper
          loop={true}
          spaceBetween={5}
          lazy="true"
          slidesPerView={4}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {techLogos.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="slider Images" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TechStack;
