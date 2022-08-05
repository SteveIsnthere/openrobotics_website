import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import React from "react";

interface Props {
  name: string;
  position: string;
  linkedin: string;
  github: string;
  email: string;
  img: any;
}

const Member = (props: Props) => {
  return (
    <div className="flex flex-col items-center mt-4 transition-colors duration-200 transform cursor-pointer rounded-xl">
      <img
        className="object-cover w-32 h-32 rounded-full"
        src={props.img}
        alt=""
      ></img>

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
        {props.name}
      </h1>

      <p className="mt-2 capitalize text-red-700 ">{props.position}</p>

      <div className="flex mt-3 -mx-2">
        <a
          href={props.linkedin}
          className="mx-2 text-2xl text-blue-700 hover:text-red-800"
          aria-label="Reddit"
        >
          <AiFillLinkedin />
        </a>

        <a
          href={props.github}
          className="mx-2 text-2xl text-gray-900 hover:text-red-800"
        >
          <AiFillGithub />
        </a>

        <a
          href={props.email}
          className="mx-2 text-2xl text-teal-500 hover:text-red-800"
          aria-label="Github"
        >
          <FaGlobe />
        </a>
      </div>
    </div>
  );
};

export default Member;
