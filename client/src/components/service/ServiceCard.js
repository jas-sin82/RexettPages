import React from "react";
import data from "../data/Data";
import classes from "./ServiceCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

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
