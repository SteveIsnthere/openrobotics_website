import React from "react";

import PianoBotTeam from './TeamPianobot';

function Projects() {
  return (
    <>
    <div>
      {/* Hero Area Start */}
      <section
        className="min-h-screen text-center"
        style={{
          backgroundImage: 'url("assets/img/pianobot/header.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <div className="bg-white mx-2 p-4 text-center">
            <p className="italic text-sm">Started: 2018-09-08</p>
            <h1 className="text-4xl uppercase font-bold xs:text-5xl md:text-6xl">
            PIANOBOT
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
              Formed in 2018, Pianobot is a newer project dedicated to
              intergrating a universal enjoyment of music into engineering.
              Originally incepted by 5 members, the team views the problem of
              replicating the finesse and capabilities of a human artist as an
              exciting endeaviour. The team also has long term goals of
              potentially adopting other instruments, such as to form an entire
              band of robots. The "Pianobot" name is expected to change based on
              the aforementioned.
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
                          The Pianobot project allows students with a passion
                          for music and robotics to combine their interests into
                          one fun project!
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
                          Modelled off the standards of the Royal Conservatory
                          of Music (RCM)
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
                          Students are aiming to have the robot play music
                          pieces designed for pianists with qualifications of
                          RCM level 4
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
                          {" "}
                          Hopefully, open to more song requests later on. (Robot
                          head may or may not be included).
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
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FUBCOpenRobotics%2Fvideos%2F2395379350590553%2F"
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
    <PianoBotTeam />
    </>
  );
}

export default Projects;
