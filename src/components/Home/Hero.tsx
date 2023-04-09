import React from "react";

import { Link } from "react-router-dom";

function Hero() {

  return (
    <>
      <section className="relative bg-blend-darken">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="assets/img/hero_image.png"
          alt="35 students posing for the camera, mostly in the middle with 3 on each side."
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-r"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-900">
              UBC OPEN ROBOTICS<br></br>
              <strong className="font-extrabold text-red-700 sm:block">
                Automation, Innovation, and Mentorship
              </strong>
            </h1>

            {/* <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-stone-900">
                 2023 Winter recruitment is now live ! Check out the Recruitment page to view open positions
            </p> */}
            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-stone-900">
            Get ready to join the exciting world of robotics with UBC Open Robotics, a dynamic student club that pushes the boundaries of innovation and technology!
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <Link
                to="/Recruitment"
                className="block w-full px-12 py-3 text-md font-medium text-white rounded shadow bg-red-700 sm:w-auto  hover:bg-red-600 focus:outline-none focus:ring"
              >
                Join Us
              </Link>

              <a
                className="block w-full px-12 py-3 text-md font-medium bg-white rounded shadow text-red-600 sm:w-auto hover:bg-gray-100  focus:outline-none focus:ring"
                href="https://openrobotics.ca/Sponsor"
              >
                Support Us
              </a>
            </div>
          </div>
          {/* <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
            <img
              src="assets/img/introduction-visual.png"
              className="w-full mx-auto hidden lg:block  lg:w-full"
            />
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
