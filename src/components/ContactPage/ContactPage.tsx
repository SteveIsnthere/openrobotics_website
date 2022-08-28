import React from "react";

const ContactPage = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
      <div className="container justify-center items-center">
        <div className="flex flex-wrap lg:justify-center  -mx-4 mt-4">
          <div className="w-full lg:w-1/2 xl:w-6/12 px-4 mt-16 md:ml-16">
            <div className="max-w-[570px] mb-12 lg:mb-0">
              <h2 className="text-dark mb-6  uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH US
              </h2>
              <div className="flex mb-8 md:mt-40 lg:mt-16 max-w-[370px] w-full">
                <div
                  className="
                            max-w-[60px]
                            sm:max-w-[70px] w-full text-red-600 h-[60px] sm:h-[70px] flex items-center justify-center mr-6 overflow-hidden bg-primary bg-opacity-5 text-primary rounded
                            "
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-dark text-xl mb-1">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color">
                    Hennings Bldg, Vancouver, BC V6T 1Z1
                  </p>
                </div>
              </div>
              <div className="flex mb-8 max-w-[370px] w-full">
                <div
                  className="
                            max-w-[60px]
                            sm:max-w-[70px]
                            w-full
                            h-[60px]
                            sm:h-[70px]
                            text-red-600
                            flex
                            items-center
                            justify-center
                            mr-6
                            overflow-hidden
                            bg-primary bg-opacity-5
                            text-primary
                            rounded
                            "
                >
                  <svg
                    width="28"
                    height="19"
                    viewBox="0 0 28 19"
                    className="fill-current"
                  >
                    <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-dark text-xl mb-1">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color">
                    intelligence@www.ubcopenrobotics.ca
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
              <form action="https://formsubmit.co/cc70d125351744f81ef8ee010ca858d2" method="POST">
                <div className="mb-6">
                  <input
                    type="email"
                    name = "email"
                    placeholder="Email"
                    className="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-base
                                border-2 border-[f0f0f0]
                                outline-none
                                focus-visible:shadow-none
                                focus:border-red-600
                                "
                  />
                 <input type="hidden" name="_next" value="https://openrobotics.ca/"></input>
					       <input type="hidden" name="_subject" value="Contact Submission - OpBots"></input>
                 <input type="hidden" name="_captcha" value="false"></input>
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    name = "Description"
                    placeholder="Your Message"
                    className="
                                w-full
                                rounded
                                py-3
                                px-[14px]
                                text-body-color text-base
                                border-2 border-[f0f0f0]
                                resize-none
                                outline-none
                                focus-visible:shadow-none
                                focus:border-red-600
                                "
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="
                                w-full
                                text-gray-300
                                bg-gray-900
                                rounded-lg
                                hover:text-gray-100
                                border border-primary
                                p-3
                                "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
