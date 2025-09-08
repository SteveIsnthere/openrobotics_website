import React from "react";
import Member from "./Member";

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

  const Leads: Array<Person> = [
    new Person(
      "Juan Diego Balestrini",
      "OpBots Co-Captain",
      "im",
      "im",
      "assets/img/admin/JD New.jpg",
      "im"
    ),
    new Person(
      "Albin Soni",
      "OpBots Co-Captain",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
  ];

  const Admin: Array<Person> = [
    new Person(
      "Sahib Rao",
      "Web Developer",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Paul Tiberghien",
      "Web Developer",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Anita Leung",
      "Web Developer",
      "https://github.com/aleung30",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),

    new Person(
      "Sofiya Spolitak",
      "Admin",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Jonathan Liu",
      "Admin",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Tara Magureanu",
      "Admin",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Emily Lee",
      "Admin",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Kevin Liu",
      "Admin",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
  ];

  const ArmProject = [
    new Person(
      "Soma Inokuchi",
      "Lead",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Byronne Rolfe",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Declan Ng",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Nam Ha",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Kai Shang",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Brian Tian",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Kevin Gao",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Daniel Li",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Cody Liu",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
  ];

  const DrivetrainProject: Array<Person> = [
    new Person(
      "Sharvari Dhuri",
      "Lead",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Chetan Gill",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Anraj Soni",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Dhruv Goel",
      "Lead",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Daniel Wan",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
  ];

  const GripperProject: Array<Person> = [
    new Person(
      "Felipe Nunes",
      "Lead",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "John Jin",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Daylen Chun",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Cathy Chou",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Susana Phuong",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
  ];

  const PowerProject: Array<Person> = [
    new Person(
      "James Na",
      "Lead",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Patrick Delfin",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Andy Setiawan",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Guanyu Zhu",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Jamie Kang",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Nimesh Pandey",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
  ];

  const Software = [
    new Person(
      "Nate Noguera",
      "Lead",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Kevin Liu",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Dikpaal Patel",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Mo Ngai",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Devin Huang",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Paulo Lin",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Brian Liu",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Roman Sinkus",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Chen-Lung Tsai",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Ella Majkic",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Anthony Ji",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Eric Tang",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "David (Yetaek) Hong",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Nikoo Vali",
      "Member",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
  ];

  return (
    <section className="bg-white w-screen overscroll-none mt-16 pt-10 z-10">
      <div className="container">
        <h1 className="text-4xl mx-[5%] font-extrabold font-Roboto700 mb-20 text-gray-800 capitalize lg:text-5xl">
          Meet The Team's Leadership
        </h1>
        <div className="my-16 mx-[5%] mb-24">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">
            Captain
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Leads.map((lead) => (
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

        <div className="my-16 mx-[5%]">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize md:-mb-4 lg:text-4xl">
            Admin
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-12 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Admin.map((lead) => (
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

        <div className="my-16 mx-[5%]">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">
            Arm Project
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {ArmProject.map((lead) => (
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

        <div className="my-16 mx-[5%]">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">
            Drivetrain Project
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {DrivetrainProject.map((lead) => (
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

        <div className="my-16 mx-[5%]">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">
            Gripper Project
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {GripperProject.map((lead) => (
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

        <div className="my-16 mx-[5%]">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">
            Power Project
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {PowerProject.map((lead) => (
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

        <div className="my-16 mx-[5%]">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">
            Software
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Software.map((lead) => (
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

        {/* <div className="my-16 mx-[5%]">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">
            RoboCup@Home
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Software.map((lead) => (
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
        </div> */}
      </div>
    </section>
  );
};

export default Team;
