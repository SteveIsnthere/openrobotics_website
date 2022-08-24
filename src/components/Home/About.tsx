import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section>
      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                className="absolute rounded-lg inset-0 object-cover w-full h-full"
                src="assets/img/team_photo.jpg"
                alt="About Us"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                INTRODUCING ROBOTICS TO EVERYONE
              </h2>

              <p className="mt-4 text-gray-600">
                UBC Open Robotics, nicknamed 'OpBots', is an advanced robotics
                design team at The University of British Columbia. Together, we
                represent approximately 60 students from various faculties. Our
                three projects allow us to explore different aspects of
                mechatronics; from a piano-playing robot, to a painting robot,
                to an advanced humanoid service bot, we have it all!
              </p>

              <Link
                className="inline-block px-12 py-3 mt-8 text-md font-medium text-white bg-red-600 border border-red-600 rounded active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring"
                to="/Team"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
