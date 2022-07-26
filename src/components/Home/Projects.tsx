import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function Project() {
  return (
    <>
      <div className="relative max-w-screen-xl px-4 py-5 mx-auto">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Our Projects
        </h2>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerGroup={3}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper center"
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <a
            className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
            href=""
          >
            <img
              className="object-cover w-full h-56"
              src="assets/img/artbot.png"
              alt=""
            />

            <div className="p-6">
              <h5 className="text-xl font-bold">
              ARTBOT
              </h5>

              <p className="mt-2 text-sm text-gray-500">
              The Artbot project is a unique opportunity for students to learn more about the intricacies of visual arts by building a robot that can paint 2D compositions!
              </p>

              <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
                Find out more
                <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
            href=""
          >
            <img
              className="object-cover w-full h-56"
              src="assets/img/pianobot.png"
              alt=""
            />

            <div className="p-6">
              <h5 className="text-xl font-bold">
              PIANO BOT
              </h5>

              <p className="mt-2 text-sm text-gray-500">
              The Pianobot project allows students with a passion for music and robotics to combine their interests into one fun project!
              </p>

              <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
                Find out more
                <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
            href=""
          >
            <img
              className="object-cover w-full h-56"
              src="assets/img/robocup.png"
              alt=""
            />

            <div className="p-6">
              <h5 className="text-xl font-bold">
              ROBOCUP@HOME
              </h5>

              <p className="mt-2 text-sm text-gray-500">
              The goal of this project is to create immensely helpful service and assistance robot technology for household usage.
              </p>

              <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
                Find out more
                <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Project;
