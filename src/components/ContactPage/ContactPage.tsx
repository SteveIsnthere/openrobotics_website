import React from 'react'

const ContactPage = () => {
  return (
    <section className="container flex flex-col lg:flex-row px-6 lg:pt-10 mx-auto">
    <div
      className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
    >
      <div className="flex flex-col w-full -ml-10 mr-6 lg:ml-[5%]">
        <div>
           <img src='assets/img/logo_update.png' alt="logo w/text" height={200} width={200}></img>
        </div>
        <h1 className="text-5xl text-gray-800 font-bold">Contact Us</h1>
        <p className="w-full mx-auto md:mx-0 text-gray-500">
          Please leave a message and we will get back to you as soon as possible
        </p>
      </div>
      <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
        <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
            Contact Us
          </h2>
          <form action="" className="w-full">
            <div id="input" className="flex flex-col w-full my-5">
              <label className="text-gray-500 mb-2"
                >Email</label
              >
              <input
                type="text"
                id="email"
                placeholder="Please enter your email"
                className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:shadow-lg"
              />
            </div>
            <div id="input" className="flex flex-col w-full my-5">
              <label className="text-gray-500 mb-2"
                >Message</label
              >
              <input
                type="text"
                id="message"
                placeholder="Your message"
                className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 h-40 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:shadow-lg"
              />
            </div>
            <div id="button" className="flex flex-col w-full my-5">
              <button
                type="button"
                className="w-full py-4 bg-gray-900 rounded-lg text-red-600 hover:bg-red-600 hover:text-gray-900"
              >
                <div className="flex flex-row items-center justify-center">
                  <div className="mr-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-bold">Send</div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactPage;
