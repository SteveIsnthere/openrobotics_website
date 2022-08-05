import React from "react";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Position from "./Position";

class Role {
  title: string;
  positions: number;
  team: string;
  description: string;

  constructor(
    title: string,
    positions: number,
    description: string,
    team: string
  ) {
    this.title = title;
    this.positions = positions;
    this.team = team;
    this.description = description;
  }
}

const Recruitment = () => {
  const positions: Array<Role> = [
    new Role(
      "Full Stack Developer",
      2,
      "yuh fajkd adjldsf afkjdsfs adfkjsfkasdjfa;slkfj ds f;sdkfj sd;kljf",
      "Admin"
    ),
    new Role("Software Engineer", 3, "Do something", "RoboCup"),
    new Role("Mechanical Engineer", 5, "YEHJDFA", "PianoBot"),
  ];

  return (
    <section className="flex flex-col m-[10%] py-10 md:mt-24 sm:mt-60 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg justify-center items-center">
      <h1 className="text-3xl py-4 font-extrabold md:text-5xl text-gray-900">
        Current Openings
      </h1>
      <span className="w-64 h-[2px] mt-0 bg-gray-900 mb-6"></span>
      <h1 className="text-2xl py-2 font-light md:text-4xl text-gray-700">
        Thank you for your interest!
      </h1>
      <p className="py-4 text-md md:text-xl  text-gray-500">
        Our Fall Recruitment cycle is in full swing right now! If you're
        interested in joining, apply for a technical position here. Note that
        our applications are open to students across all faculties and of
        varying skill levels. We look forward to your applications! For further
        questions please{" "}
        <span className="font-bold text-red-500 cursor-pointer hover:text-red-700">
          contact
        </span>{" "}
        us
      </p>
      {positions.map((position: Role) => (
        <Position
          name={position.title}
          positions={position.positions}
          team={position.team}
          desc={position.description}
        />
      ))}
      <button className="bg-gray-900 w-auto font-bold rounded-lg mt-8 md:mt-16 px-20 py-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-600  text-gray-200 text-center">
        Apply Now
      </button>
    </section>
  );
};

//onClick rounded-lg for bottom dissapears and rounded-lg for top of desc dissapears
export default Recruitment;
