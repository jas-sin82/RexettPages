import React from "react";
import classes from "./ServiceCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import webDevelopment from "../../images/webDevelopment.png";
import webdesign from "../../images/mobile-app-development.png";
import mobileApp from "../../images/mobile-app.png";
import eCommerce from "../../images/eCommerce.png";

const data = [
  {
    id: 1,
    image: webDevelopment,
    title: "Web Development",
    url: "/service/webdevelopment",
    description:
      "We provide professional Web Application Development to clients all over the world. Responsive web design is about creating web pages that look good on all devices, We ensure that we build mobile-friendly website that is designed to work the exact same way across devices.",
  },
  {
    id: 2,
    image: webdesign,
    title: "Web Design",
    url: "/service/webdesign",
    description:
      "As an experienced team of website designers, we have expertise in creating websites tailored to the varied needs of our clients. We can offer you website design services to help you create new websites or revamp existing ones with equal ease.",
  },
  {
    id: 3,
    image: mobileApp,
    title: "Mobile App",
    url: "/service/mobileapp",
    description:
      "We take pride in providing complete mobile and web solutions that help you see new heights in your business. We work with immense enthusiasm for each project we take on, We care about making sure your app works great.",
  },
  {
    id: 4,
    image: eCommerce,
    title: "Ecommerce",
    url: "/service/ecommerce",
    description:
      "We offer a revolutionary experience by enabling your digital commerce business through innovative eCommerce portals and development services that can optimize front-office and back-office operations, reduce costs, increase traffic and revenue, preserve interoperability, elevate brand image, and personalize client journeys.",
  },
];

const ServiceCard = () => {
  return (
    <>
      <div className={classes.cards}>
        {data.map((card) => (
          <div key={card.id} className={classes.cardSection}>
            <h2>{card.title}</h2>
            <Link className={classes.linkButton} to={card.url}>
              <img src={card.image} alt={card.title} />
              <div className={classes.cardBody}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={classes.card}>
        <Swiper
          loop={true}
          spaceBetween={5}
          lazy="true"
          slidesPerView={1}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {data.map((card, index) => (
            <SwiperSlide>
              {" "}
              <div key={card.id} className={classes.cardsSection}>
                <h2>{card.title}</h2>
                <Link className={classes.linkButton} to={card.url}>
                  <img src={card.image} alt={card.title} />
                  <div className={classes.cardBody}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ServiceCard;
