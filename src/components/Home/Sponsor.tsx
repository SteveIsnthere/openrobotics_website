import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Sponsor() {
  return (
    <>
      <div className="relative max-w-screen-xl px-4 py-5 mx-auto">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Sponsorship
        </h2>

        <p className="max-w mx-auto mt-5 text-gring-offset-warm-gray-500">
          As a measure to continue our steady growth and progressions, our team
          needs your support in the form of sponsorship.Your investment in our
          team will go beyond just helping our team’s growth and progression.
          Not only will you inspire our team as they gain new equipment and
          materials which they need, but also help generate more appreciation
          for robotics in the UBC community.
          <br></br>
          <br></br>
          If you are considering a sponsorship, please click the following
          button
        </p>
        <div className="flex flex-wrap gap-4 mt-8 text-center">
          <a
            className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-red-800 sm:w-auto active:bg-red-600 hover:bg-red-700 focus:outline-none focus:ring"
            href="/get-started"
          >
            Sponsor Us Now
          </a>

          <a
            className="block w-full px-12 py-3 text-sm font-medium bg-red-200 rounded shadow text-red-800 sm:w-auto hover:text-red-700 active:text-red-600 focus:outline-none focus:ring"
            href="/about"
          >
            Sponsorship Guide
          </a>
        </div>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="assets/img/sponsor/RioTinto.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Sponsor;
