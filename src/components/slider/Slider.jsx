import React from "react";
import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'

//import styles
import 'swiper/react'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import {SliderProducts} from '../../data/products'

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      className="mySwiper"
      loopFillGroupWithBlank={true}
      slidesPerView={3}
      spaceBetween={40}
      navigation={true}
      pagination={{ clickable: true }}
      slidesPerGroup={1}
      loop={true}
      breakpoints={{
        640: {
            slidesPerView: 3
        },
        0: {
            slidesPerView: 1
        }
    }}
      >
        {SliderProducts.map((slide,i)=> (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>

              <span>${slide.price}</span>
              <div>Shop now</div>
            </div>

            <img src={slide.img} alt="product" className="img-p"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
