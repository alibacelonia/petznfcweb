"use client" // this is a client component
import React from "react"
import { HiArrowDown, HiChevronDown } from "react-icons/hi"
import { Link } from "react-scroll/modules"
import { Swiper, SwiperSlide, SwiperSlideProps } from 'swiper/react';

import '../app/globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
const HowItWorksSection = () => {
  return (
    <section id="howitworks" className="overflow-hidden pt-5">
    
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 pt-14 sm:pt-32 md:flex-row md:text-left">

        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            "768": { "slidesPerView": 3 }
          }}
        >
          <SwiperSlide><img className="block mx-auto" src="https://silicon.createx.studio/assets/img/landing/app-showcase/screens/01.png" /></SwiperSlide>
          <SwiperSlide><img className="block mx-auto" src="https://silicon.createx.studio/assets/img/landing/app-showcase/screens/02.png" /></SwiperSlide>
          <SwiperSlide><img className="block mx-auto" src="https://silicon.createx.studio/assets/img/landing/app-showcase/screens/03.png" /></SwiperSlide>
          <SwiperSlide><img className="block mx-auto" src="https://silicon.createx.studio/assets/img/landing/app-showcase/screens/04.png" /></SwiperSlide>
          <SwiperSlide><img className="block mx-auto" src="https://silicon.createx.studio/assets/img/landing/app-showcase/screens/04.png" /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default HowItWorksSection
