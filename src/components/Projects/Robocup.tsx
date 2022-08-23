import React from "react";

import RoboCupTeam from "./TeamRobocup";

function Projects() {
  return (
    <>
      <div>
        {/* Hero Area Start */}
        <section
          className="min-h-screen text-center"
          style={{
            backgroundImage: 'url("assets/img/robocup/robocup.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-screen flex items-center justify-center">
            <div className="bg-white mx-2 p-4 text-center">
              <p className="italic text-sm">Started: 2018-09-08</p>
              <h1 className="text-4xl uppercase font-bold xs:text-5xl md:text-6xl">
                RoboCup@Home
              </h1>
              <p className="text-lg">Ongoing project</p>
            </div>
          </div>
        </section>
        {/* Hero Area End */}

        {/* Feature Section Start */}
        <div id="feature" className="bg-red-100 py-24">
          <div className="container">
            <div className="flex flex-wrap items-center">
              <h2
                className="mb-2 section-heading wow fadeInDown text-red-700"
                data-wow-delay="0.3s"
              >
                Project Description
              </h2>
              <h2 className="mb-9 wow">
                A robotic arm is a type of mechanical arm, usually programmable,
                with similar functions to a human arm; the arm may be the sum
                total of the mechanism or may be part of a more complex robot.
                The links of such a manipulator are connected by joints allowing
                either rotational motion or translational displacement.
              </h2>

              <div className="w-full lg:w-1/2">
                <div className="mb-5 lg:mb-0">
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 lg:w-1/2">
                      <div className="m-3">
                        <div className="icon text-4xl">
                          <i className="lni lni-users" />
                        </div>
                        <div className="features-content">
                          <h4 className="feature-title">Goals: </h4>
                          <p>
                            {" "}
                            The RoboCup@Home project allows students to apply
                            and strengthen their knowledge of mechanical,
                            electrical, and software design through the annual
                            international RoboCup@Home competition.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/2">
                      <div className="m-3">
                        <div className="icon text-4xl">
                          <i className="lni lni-bulb" />
                        </div>
                        <div className="features-content">
                          <h4 className="feature-title">Ideas: </h4>
                          <p>
                            {" "}
                            To build up the required technologies gradually a
                            basic home environment is provided as a general
                            scenario.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/2">
                      <div className="m-3">
                        <div className="icon text-4xl">
                          <i className="lni lni-target" />
                        </div>
                        <div className="features-content">
                          <h4 className="feature-title">Objective: </h4>
                          <p>
                            {" "}
                            This project aims to develop service and assistive
                            robot technology highly relevant for personal
                            domestic use. It is the largest international annual
                            competition for autonomous service robots and is
                            part of the RoboCup initiative
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/2">
                      <div className="m-3">
                        <div className="icon text-4xl">
                          <i className="lni lni-timer" />
                        </div>
                        <div className="features-content">
                          <h4 className="feature-title">Future Usage:</h4>
                          <p>
                            We will continue developing the software
                            architecture, which will pave the path for the
                            Robocup@Home 2021 Open League Challenge as well as
                            expand our relationship with the Robocup@Home
                            Community across North America and lead initiatives
                            that promote robotics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div
                  className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <iframe
                    className="w-full"
                    src="https://www.youtube.com/embed/YpjeNa8BAYg"
                    title="Robocup - @Home"
                    height="350"
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Section End */}

        {/* Go to Top Link */}
        <a
          href="#"
          className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-red-900 text-white text-lg z-20 duration-300 hover:bg-red-700"
        >
          <i className="lni lni-arrow-up" />
        </a>
        {/* Preloader */}
        {/*     <div id="preloader">
<div class="loader" id="loader-1"></div>
    </div> */}
        {/* End Preloader */}
        {/* All js Here */}
      </div>
      {/* <RoboCupTeam /> */}
    </>
  );
}

export default Projects;
