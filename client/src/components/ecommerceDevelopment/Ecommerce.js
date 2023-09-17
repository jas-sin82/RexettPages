import React from "react";
import { EcommerceServices } from "../data/ecommerceServices";
import classes from ".././webDevelopmentServices/WebDevelopment.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const EcommerceData = () => {
  return (
    <>
      <div className={classes.cards}>
        {EcommerceServices.map((data) => (
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
          {EcommerceServices.map((data) => (
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
          {EcommerceServices.map((data) => (
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

export default EcommerceData;
