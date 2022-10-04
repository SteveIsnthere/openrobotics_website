import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail,
} from "react-icons/ai";

const Footer = () => {
  const routes = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/Projects" },
    { title: "Our Team", path: "/Team" },
    { title: "Contact Us", path: "/Contact" },
    { title: "Sponsors", path: "/Sponsor" },
  ];

  return (
    <footer className="bg-gray-900 w-screen text-gray-300">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          {routes.map((item, idx) => (
            <li key={idx} className="font-bold hover:text-gray-100 cursor-pointer">
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/ubc-open-robotics/mycompany/"
              title="Instagram"
              className="flex text-2xl items-center justify-center cursor-pointer w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-700 text-gray-900 hover:bg-gray-300"
            >
              <AiFillLinkedin />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/openrobotics"
              title="Instagram"
              className="flex text-2xl items-center justify-center cursor-pointer w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-700 text-gray-900 hover:bg-gray-300"
            >
              <AiFillGithub />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/UBCOpenRobotics/"
              title="Instagram"
              className="flex text-2xl items-center justify-center cursor-pointer w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-700 text-gray-900 hover:bg-gray-300"
            >
              <AiFillFacebook />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/ubcopenrobotics/?hl=en"
              title="Instagram"
              className="flex text-2xl items-center justify-center cursor-pointer w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-700 text-gray-900 hover:bg-gray-300"
            >
              <AiFillInstagram />
            </a>
            <a
              rel="noopener noreferrer"
              href="mailto:intelligence@www.ubcopenrobotics.ca"
              title="Instagram"
              className="flex text-2xl items-center justify-center cursor-pointer w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-700 text-gray-900 hover:bg-gray-300"
            >
              <AiFillMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
