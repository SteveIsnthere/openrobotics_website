import React from 'react'

function Projects() {
  return (
    <div>
      
  {/* Hero Area Start */}
  <section className="min-h-screen p-32 text-center" style={{backgroundImage: 'url("assets/img/robocup/robocup.png")', backgroundSize: 'cover'}}>
  <div className="bg-white mx-4 p-4 text-center md:p-8">
  <p className="italic text-sm">
  Started: 2018-09-08
  </p>
  <h1 className="text-5xl wow uppercase font-bold">
    RoboCup@Home
  </h1>
  <p className="text-lg">
  Ongoing project
  </p>
</div>

</section>
  {/* Hero Area End */}
  
  {/* Feature Section Start */}
  <div id="feature" className="bg-red-100 py-24">
    <div className="container">
      <div className="flex flex-wrap items-center">
      <h2 className="mb-2 section-heading wow fadeInDown text-red-700" data-wow-delay="0.3s">Project Description</h2>
      <h2 className="mb-9 wow">A robotic arm is a type of mechanical arm, usually programmable, with similar functions to a human arm; the arm may be the sum total of the mechanism or may be part of a more complex robot. The links of such a manipulator are connected by joints allowing either rotational motion or translational displacement.</h2>
           
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
                    <p> The RoboCup@Home project allows students to apply and strengthen their knowledge of mechanical, electrical, and software design through the annual international RoboCup@Home competition.</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/2">
                <div className="m-3">
                  <div className="icon text-4xl">
                    <i className="lni lni-bulb"/>
                  </div>
                  <div className="features-content">
                    <h4 className="feature-title">Ideas: </h4>
                    <p> To build up the required technologies gradually a basic home environment is provided as a general scenario.</p>
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
                    <p> This project aims to develop service and assistive robot technology highly relevant for personal domestic use. It is the largest international annual competition for autonomous service robots and is part of the RoboCup initiative</p>
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
                    <p>We will continue developing the software architecture, which will pave the path for the Robocup@Home 2021 Open League Challenge as well as expand our relationship with the Robocup@Home Community across North America and lead initiatives that promote robotics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight" data-wow-delay="0.3s">
          <iframe className='w-full' src="https://www.youtube.com/embed/YpjeNa8BAYg" title="Robocup - @Home" height="350" scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature Section End */}
  {/* Team Section Start */}
  <section id="team" className="py-24 text-center">
    <div className="container">
      <div className="text-center">
        <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">Our Team</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="team-item">
            <div className="team-img relative">
              <img className="mx-auto" src="assets/img/pianobot/shawna.png" alt="" />
              <div className="team-overlay">
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a href="https://www.linkedin.com/in/shawna-naderi-1aa49919b/" className="social-link hover:bg-red-700">
                      <i className="lni lni-linkedin-original" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="team-name">Shawna Naderi</h3>
              <p>PianoBot Lead</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="team-item">
            <div className="team-img relative">
              <img className="mx-auto" src="assets/img/pianobot/veronica.png" alt="" />
              <div className="team-overlay">
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a href="https://www.linkedin.com/in/veronica-n-7454821a3/" className="social-link hover:bg-red-700">
                      <i className="lni lni-linkedin-original" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="team-name">Veronica Nguyen</h3>
              <p>PianoBot Lead</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="team-item">
            <div className="team-img relative">
              <img className="mx-auto" src="assets/img/pianobot/ryan.png" alt="" />
              <div className="team-overlay">
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a href="https://www.linkedin.com/in/ryaanluke/?originalSubdomain=ca" className="social-link hover:bg-red-700">
                      <i className="lni lni-linkedin-original" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="team-name">Ryan Luke Acapulco</h3>
              <p>PianoBot Member</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="team-item">
            <div className="team-img relative">
              <img className="mx-auto" src="assets/img/pianobot/scott.png" alt="" />
              <div className="team-overlay">
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a href="https://www.linkedin.com/in/scott-beaulieu-81a2b3127/" className="social-link hover:bg-red-700">
                      <i className="lni lni-linkedin-original" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="team-name">Scott Beaulieu</h3>
              <p>PianoBot Member</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="team-item">
            <div className="team-img relative">
              <img className="mx-auto" src="assets/img/pianobot/evan.png" alt="" />
              <div className="team-overlay">
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a href="https://www.linkedin.com/in/evanyl/" className="social-link hover:bg-red-700">
                      <i className="lni lni-linkedin-original" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="team-name">Evan Liu</h3>
              <p>PianoBot Member</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="team-item">
            <div className="team-img relative">
              <img className="mx-auto" src="assets/img/pianobot/fernando.png" alt="" />
              <div className="team-overlay">
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a href="https://www.linkedin.com/in/ngfernando/" className="social-link hover:bg-red-700">
                      <i className="lni lni-linkedin-original" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="team-name">Fernando Ng</h3>
              <p>PianoBot Member</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="team-item">
            <div className="team-img relative">
              <img className="mx-auto" src="assets/img/pianobot/karthik.png" alt="" />
              <div className="team-overlay">
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a href="https://www.linkedin.com/in/karthik-ravichandran-54352919b/?originalSubdomain=ca" className="social-link hover:bg-red-700">
                      <i className="lni lni-linkedin-original" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="team-name">Karthik Ravichandran</h3>
              <p>PianoBot Member</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="team-item">
            <div className="team-img relative">
              <img className="mx-auto" src="assets/img/pianobot/prayus.png" alt="" />
              <div className="team-overlay">
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a href="https://www.linkedin.com/in/prayus-shrestha/" className="social-link hover:bg-red-700">
                      <i className="lni lni-linkedin-original" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="team-name">Prayus Shrestha</h3>
              <p>PianoBot Member</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
        {/* Team Item Starts */}
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
          <div className="team-item">
            <div className="team-img relative">
              <img className="mx-auto" src="assets/img/pianobot/yiting.png" alt="" />
              <div className="team-overlay">
                <ul className="flex justify-center">
                  <li className="mx-1">
                    <a href="https://www.linkedin.com/in/yiting-w/" className="social-link hover:bg-red-700">
                      <i className="lni lni-linkedin-original" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center px-5 py-3">
              <h3 className="team-name">Yiting Wu</h3>
              <p>PianoBot Member</p>
            </div>
          </div>
        </div>
        {/* Team Item Ends */}
      </div>
    </div>
  </section>
  {/* Team Section End */}

  {/* Footer Section Start */}
  <footer id="footer" className="bg-gray-800 py-16">
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.2s">
          <div className="mx-3 mb-8">
            <div className="footer-logo mb-3">
              <img src="assets/img/logo_update.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.4s">

        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.6s">
     
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 wow fadeInUp" data-wow-delay="0.8s">
          <div className="mx-3 mb-8">
            <h3 className="font-bold text-xl text-white mb-5">Find us on</h3>
            <ul className="social-icons flex justify-start">
              <li className="mx-2">
                <a href="#" className="footer-icon hover:bg-red-700">
                  <i className="lni lni-facebook-original" aria-hidden="true" />
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="footer-icon hover:bg-red-700">
                  <i className="lni lni-twitter-original" aria-hidden="true" />
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="footer-icon hover:bg-red-500">
                  <i className="lni lni-instagram-original" aria-hidden="true" />
                </a>
              </li>
              <li className="mx-2">
                <a href="#" className="footer-icon hover:bg-indigo-600">
                  <i className="lni lni-linkedin-original" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>     
  </footer> 
  {/* Footer Section End */}

  {/* Go to Top Link */}
  <a href="#" className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-red-900 text-white text-lg z-20 duration-300 hover:bg-red-700">
    <i className="lni lni-arrow-up" />
  </a>
  {/* Preloader */}
  {/*     <div id="preloader">
<div class="loader" id="loader-1"></div>
    </div> */}
  {/* End Preloader */}
  {/* All js Here */}
</div>
   
  )
}

export default Projects