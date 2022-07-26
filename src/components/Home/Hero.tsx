import React from "react";
import { useState } from "react";

function Hero() {
  const [state, setState] = useState(false);

  return (
    <>
      <section className="relative bg-blend-darken">
  <img
    className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
    src="assets/img/wallpaper.png"
    alt="Team Picture"
  />

  <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-r"></div>

  <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        UBC OPEN ROBOTICS<br></br>
        <strong className="font-extrabold text-red-800 sm:block">
          Creating Robots, improving Humans
        </strong>
      </h1>

      <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
      2022-2023 Winter Applications Coming Soon  
      </p>

      <div className="flex flex-wrap gap-4 mt-8 text-center">
        <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-red-800 sm:w-auto active:bg-red-600 hover:bg-red-700 focus:outline-none focus:ring" href="/get-started">
          Join Us
        </a>

        <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-red-800 sm:w-auto hover:text-red-700 active:text-red-600 focus:outline-none focus:ring" href="/about">
          Learn More 🤔
        </a>
      </div>
    </div>
    <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
          <img
            src="assets/img/introduction-visual.png"
            className="w-full mx-auto hidden lg:block  lg:w-full"
          />
        </div>
  </div>
</section>
    </>
  );
}

export default Hero;
