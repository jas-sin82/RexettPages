import React from "react";
import { missionData } from "../data/missionData";
import classes from "./Mission.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Mission = () => {
  return (
    <>
      <div className={classes.card}>
        {missionData.map((data) => (
          <div key={data.id} className={classes.cardsSection}>
            <h2>{data.number}</h2>
            <p>{data.title}</p>
          </div>
        ))}
      </div>
      <div className={classes.cards}>
        <Swiper
          loop={true}
          spaceBetween={1}
          lazy="true"
          slidesPerView={2}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {missionData.map((data) => (
            <SwiperSlide>
              {" "}
              <div key={data.id} className={classes.cardsSection2}>
                <h2>{data.number}</h2>
                <p>{data.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Mission;
