import React from "react";
import Member from "../Team/Member";

const Team = () => {
  class Person {
    name: string;
    position: string;
    linkedin: string;
    github: string;
    email: string;
    img: string;

    constructor(
      name: string,
      position: string,
      linkedin: string,
      github: string,
      img: string,
      email: string
    ) {
      this.name = name;
      this.position = position;
      this.linkedin = linkedin;
      this.github = github;
      this.email = email;
      this.img = img;
    }
  }
  const ArtBot: Array<Person> = [
    new Person(
      "Aiden Smith",
      "ArtBot Lead",
      "im",
      "im",
      "assets/img/artbot/aiden.png",
      "im"
    ),
    new Person(
      "Navneeth Devadas",
      "ArtBot Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Felice Jie Chen",
      "ArtBot Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Benji Li",
      "ArtBot Member",
      "im",
      "im",
      "assets/img/artbot/benji.png",
      "im"
    ),
  ];

  return (
    <section className="bg-white w-screen overscroll-none mt-16 pt-10 z-10">
      <div className="container">
        <div className="my-16 mx-[5%]">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl text-center">
            The ArtBot Team
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {ArtBot.map((lead) => (
              <Member
                name={lead.name}
                position={lead.position}
                linkedin={lead.linkedin}
                github={lead.github}
                img={lead.img}
                email={lead.email}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
