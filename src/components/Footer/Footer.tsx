import React from 'react'
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillFacebook, AiFillMail} from 'react-icons/ai'

const Footer = () =>{
  const icons = [
    <AiFillLinkedin/>,
    <AiFillGithub/>,
    <AiFillFacebook/>,
    <AiFillInstagram/>,
    <AiFillMail/>
  ];

  const routes = [
    "Home",
    "Projects",
    "Our Team",
    "Join Us",
    "Sponsors",
    "Contact Us",
  ];

  return (
  <footer className="bg-gray-900 w-screen text-gray-300">
    <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
      <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
        {routes.map((route) => (
          <li className='font-bold hover:text-gray-100 cursor-pointer'>{route}</li>
        ))}
      </ul>
      <div className="flex flex-col justify-center pt-6 lg:pt-0">
        <div className="flex justify-center space-x-4">
        {icons.map((icon) => (
          <a rel="noopener noreferrer" href="#" title="Instagram" className="flex text-2xl items-center justify-center cursor-pointer w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-red-500 text-gray-900 hover:bg-gray-300">
            {icon}
        </a>
        ))}
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
