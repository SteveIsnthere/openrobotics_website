import React from "react";

import ArtBotTeam from './TeamArtbot';

function Projects() {
  return (
    <>
    <div>
      {/* Hero Area Start */}
      <section
        className="max-h-screen text-center"
        style={{
          backgroundImage: 'url("assets/img/artbot.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-screen flex items-center justify-center">
          <div className="bg-white mx-2 p-4 text-center">
            <p className="italic text-sm">Started: 2018-01-05</p>
            <h1 className="text-4xl uppercase font-bold xs:text-5xl md:text-6xl">
              ARTBOT
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
              What's an artbot? It's a robot that makes art! But not just any
              art, beautiful art. The Artbot project is a unique opportunity for
              students to learn more about the intricacies of visual arts by
              building a robot that can paint 2D compositions. Participating in
              the international RobotArt competition, students are focusing on
              constructing a delta robot to create both abstract art pieces, and
              modern (robot) interpretations of classic works.
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
                          The Artbot project is a unique opportunity for
                          students to learn more about the intricacies of visual
                          arts by building a robot that can paint 2D
                          compositions!
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
                          Creating a robot that can create both abstract art
                          pieces and modern interpretations of classic works.
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
                          Participating in the international RobotArt
                          competition, students are focusing on constructing a
                          delta robot to create both abstract art pieces, and
                          modern (robot) interpretations of classic works.
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
                          Generating new and original artwork by combining
                          different styles and techniques
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
                  src="https://www.youtube.com/embed/JL0T250wD-s"
                  title="RobotArt: Tulips"
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
    <ArtBotTeam />
    </>
  );
}

export default Projects;
