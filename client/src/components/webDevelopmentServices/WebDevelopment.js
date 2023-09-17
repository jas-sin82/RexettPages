import React from "react";
import { DevelopmentService } from "../data/webDevelopmentServices";
import classes from "./WebDevelopment.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const WebDevelopmentServices = () => {
  return (
    <>
      <div className={classes.cards}>
        {DevelopmentService.map((data) => (
          <div key={data.id} className={classes.cardSection}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
      <div className={classes.card}>
        <Swiper
          loop={true}
          spaceBetween={1}
          lazy="true"
          slidesPerView={2}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {DevelopmentService.map((data) => (
            <SwiperSlide>
              {" "}
              <div key={data.id} className={classes.cardSection}>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={classes.cardMobile}>
        <Swiper
          loop={true}
          spaceBetween={1}
          lazy="true"
          slidesPerView={1}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {DevelopmentService.map((data) => (
            <SwiperSlide>
              {" "}
              <div key={data.id} className={classes.cardSection}>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default WebDevelopmentServices;
