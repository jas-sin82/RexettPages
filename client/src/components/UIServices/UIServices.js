import React from "react";
import { UiService } from "../data/UIService";
import classes from "./UIServices.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const UIServices = () => {
  return (
    <>
      <div className={classes.cards}>
        {UiService.map((data, index) => (
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
          {UiService.map((data) => (
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
          {UiService.map((data) => (
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

export default UIServices;
