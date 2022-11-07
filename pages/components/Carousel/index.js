import Image from "next/image";

import { DataCarousel } from "./DataCarousel";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation } from "swiper";

export const Carousel = () => {
  return (
    <div className="carousel-container content">
      <h1 className="title-content-carousel">Quisque</h1>
      <div className="carousel-content">
        <Swiper
          slidesPerView={3}
          grabCursor={true}
          freeMode={true}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation]}
          className="mySwiper"
          spaceBetween={30}
          breakpoints={{
            1400: {
              slidesPerView: 3.5,
            },
            1200: {
              slidesPerView: 3.6,
            },
            992: {
              slidesPerView: 2.4,
            },
            768: {
              slidesPerView: 1.8,
            },
            470: {
              slidesPerView: 1.15,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: -10,
            }
          }}
        >
          {DataCarousel.map(item => {
            return (
              <SwiperSlide>
                <div className="card">
                  <div className="header-card">
                    <span>{item.name}</span>
                    <p>{item.title}</p>
                  </div>
                  <div className="image-carousel">
                    {item.img}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="btn-arrow-carousel"></div>
    </div>
  )
}