import React from "react";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Position from "./Position";
import { Link } from "react-router-dom";

class Role {
  title: string;
  positions: string;
  team: string;
  description: string;
  responsibilities: Array<string>;
  qualifications: Array<string>;
  pref: Array<string>;

  constructor(
    title: string,
    positions: string,
    description: string,
    team: string,
    responsibilities: Array<string>,
    qualifications: Array<string>,
    pref: Array<string>
  ) {
    this.title = title;
    this.positions = positions;
    this.team = team;
    this.description = description;
    this.responsibilities = responsibilities;
    this.qualifications = qualifications;
    this.pref = pref;
  }
}

const Recruitment = () => {
  const positions: Array<Role> = [
    new Role(
      "Admin Member",
      "1",
      "We are looking for a web developer to assist with the expansion of our new Open Robotics website.",
      "Web Developer (Full-Stack)",
      [
        "Discuss design requirements and new features with captains",
        "Mantain current codebase and write clean new code for the website",
        "Be a quick learner and open to using and learning new technologies",
      ],
      [
        "Proficient in JavaScript/TypeScript",
        "Experience with full-stack technologies like React, Node, and Express",
      ],
      [
        "Understanding and experience with NoSQL databases",
        "Experience with tailwindCSS",
      ]
    ),
    new Role(
      "Mechanical Engineer",
      "1-2",
      "We are looking for additional mechanical sub-team members on Pianobot to assist in the designing of the pedal as well as making improvements to the current design.",
      "PianoBot",
      [
        "3-D printing and prootyping",
        "CAD Modelling",
        "Critical thinking and design optimization (mainly weight optimization and manufacturing methods)",
      ],
      [
        "Willingless to learn",
        "Consistent communicator",
        "Able to see a broad view of a project, able to understand why something needs to be done/changed and not just following instructions blindly",
      ],
      []
    ),
    new Role(
      "Software Engineer",
      "8-10",
      `This is a position where you will work on a diverse range of challenges. You will need to be
            practical yet creative as you will be required to troubleshoot difficult and often frustrating
            problems.`,
      "Robocup",
      [
        "Experience with modeling software such as Solidworks/Onshape",
        "Experience with sensors and actuators",
        `Able to communicate and collaborate with other software and hardware
            engineers,through sketches, block diagrams, flow charts, technical writing, and
            presentations`,
        `Must maintain proper and accurate documentation of engineering
             research,developments, experiments, purchases, etc.`,
      ],
      [
        `Exceptional eagerness to learn and become better`,
        `Experience with instrumentation and soldering`,
        `Creative and systematic troubleshooting aptitude. Skilled at reading research papers
              and gleaning inspiration from them.`,
        `Strong hands on prototyping skills`,
        `Experience writing code (C++/Python)`,
        `Experience using ROS`,
      ],
      []
    ),
    new Role(
      "Electrical Engineer",
      "3",
      `Our Robocup@Home team is progressing toward competing in the Robocup@Home
            competition for service robots. The Drivetrain team is responsible for designing and building
            the electrical portion of the drivetrain for our Robocup@Home robot. We have completed
            the design stage and are moving on to the testing stage with parts on the way. We would be
            involved in assembling and testing the drivetrain in the upcoming months.`,
      "Robocup DriveTrain",
      [
        `Design and test the firmware for the drivetrain`,
        `Create and test the various electrical components of the drivetrain`,
        `Work with the mechanical sub-team to integrate the mechanical and
              electrical parts`,
        `Collaborate with the software sub-team for firmware integration and QA`,
      ],
      [
        `Familiarity with circuit design and analysis`,
        `Experience with lab equipment (i.e. Oscilloscopes, power supplies)`,
        `PCB design experience`,
        `Knowledge of or experience with firmware development`,
      ],
      []
    ),
    new Role(
      "Electrical Engineer",
      "3",
      `Our Robocup@Home project involves cutting-edge R&D in the realm of service robotics. The team is progressing towards competing in the internationally-acclaimed Robocup Competition, @Home League. The Arms team is responsible for determining specifications, designing, and building an autonomous robotic manipulator for our Robocup@Home robot. This position focuses on the electrical side of the arm, but there will be collaboration with the mechanical team.`,
      "Robocup Arms",
      [
        `Assisting in the electrical design of the robotic arm including the arm’s control and power circuits`,
        ` Work with other electrical team members to design and build electrical test equipment`,
        `Perform detailed validation and specification testing on hardware components and various stages of prototypes`,
        `Write basic libraries in device firmware for integration`,
      ],
      [
        `Have experience working with circuit design `,
        `Preference given to candidates who have done at least one work term in the field of electrical engineering `,
      ],
      []
    ),
    new Role(
      "Integration Lead",
      "1",
      `We’re looking for a systematic person with an interest in leading this project. This naturally involves a lot of planning, organization, and having a high-level understanding of how the different technical sub-teams can integrate seamlessly. While this is a more leadership position, there are plenty of opportunities for technical work, and anyone in this position will be able to appreciate and gain experience with the different aspects of building an autonomous robot.
            `,
      "Robocup",
      [
        `Apply a variety of leadership techniques and management skills to lead the team as we build a cost-effective, efficient, and autonomous robot for competition`,
        `Organize technical design reviews to ensure designs are of the highest quality and feasible within budget and timeline constraints`,
        `Ensure strong, consistent communication within the sub-teams`,
        `Ensure sub-teams stay on track for the competition, and if not investigate where delays are coming from`,
      ],
      [
        `Experience with project-based learning`,
        `Experience with project management software (JIRA, Monday, Trello)`,
        `Strong and effective communication skills`,
      ],
      [
        `Experience with either mechanical design, circuit design, or software frameworks for robotic communication systems`,
        `Previous leadership experience`,
      ]
    ),
    new Role(
      "Mechatronics Designer",
      "1",
      `We’re looking to recruit one MECHA Designer for the Head and Neck team in order to improve, iterate, and prototype our robot designs. This naturally involves a lot of design, machining/manufacturing, and assembly work - a perfect place to get more hands-on experience. 

            Within the team, we have leadership roles we are looking to fill in the upcoming future. Step in and step up to not only become a stellar engineer, but also a confident leader.
            `,
      "Robocup Head/Neck",
      [
        `Use Computer-Aided Design (CAD) software to design/modify the robotic neck and payload (head)`,
        `Use 3D printers to create rapid prototypes of your design`,
        `Machine parts and assemble the Neck and HwS`,
        `Learn more about good design practices, leadership techniques, and management skills`,
        `Applying aesthetic techniques to make good quality, attractive robot head panels`,
      ],
      [
        `Preffered minimum third year standing`,
        `Proficient in CAD prototyping with software such as SolidWorks and Onshape`,
        `Experience in Design for Manufacturing and Assembly (DFMA)`,
        `Experience with 3D printers and rapid prototyping`,
        `Experience with project-based learning`,
        `Interest in aesthetic panel design`,
      ],
      [
        `Machine shop experience`,
        `Experience with Finite Element Analysis (FEA)`,
        `Multi-tasking proficiency`,
        `Experience with Arduino`,
      ]
    ),
    new Role(
      "Arms/DriveTrain MECH (1st & 2nd years)",
      "TBD",
      `We’re looking to recruit bright-eyed first and second year students to give UBC Open Robotics some fresh blood. While these students will have responsibilities to carry out over the year, this role is less about what you can do for us and more about what we can do for you. We’re looking to train and tutor younger students and help transition them into excellent upper-year designers. We want to help you get more design, machining/manufacturing, and assembly work - a perfect combination of hands-on experience.
            `,
      "Robocup",
      [
        `Learn Computer-Aided Design (CAD) software to design/modify robotic manipulators`,
        `Learn how to use 3D printers to create rapid prototypes of your design`,
        `Learn how to machine parts`,
        `Learn how to calculate and spec machine-design components such as motors, gearboxes, and bearings`,
        `Find out why it is important to work closely with the ELEC sub-team to integrate electromechanical parts`,
        `Carry out organizational tasks and practice some presentational skills`,
        `Learn more about good design practices, leadership techniques, and management skills`,
        `Participate in a design challenge that will pit you against your peers`,
        `Learn how to respectfully destroy your peers in design challenges`,
      ],
      [
        `Willingness to learn and grow as a student, engineer, and person`,
        `Interest in robotics, mechanical design, and electromechanical components/machines`,
        `Understanding of other people and able to acknowledge that there are always people of higher and lower skill level`,
        `Alive and breathing`,
      ],
      [
        `Previous experience with extracurricular teams`,
        `Previous experience in leadership roles`,
        `Previous experience in being a nerd`,
      ]
    ),
  ];

  return (
    <section className="flex flex-col m-[10%] py-10 md:mt-24 sm:mt-30 xs:mt-60 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl justify-center items-center">
      <h1 className="text-3xl py-1 font-extrabold md:text-5xl text-gray-900">
        Current Openings
      </h1>
      <h1 className="text-2xl py-2 font-light md:text-3xl text-gray-700">
        Thank you for your interest!
      </h1>
      {/* <p className="py-4 text-md md:text-lg  text-gray-500">
        Thank you for your interest in UBC Open Robotics. Our Fall recruitment has just closed and we would like to thank everyone who
        applied. Candidates that applied can expect to hear back from us soon. To those who missed out, our Recruitment will reopen in January and positions will be found here. For any questions feel free to 
        {" "}
        <Link
                className="font-bold text-red-500 cursor-pointer hover:text-red-700"
                to="/Contact"
              >
                contact 
        </Link>
        {" "}us
      </p> */}
      {positions.map((position: Role, idx) => (
        <Position
          key={idx}
          name={position.title}
          positions={position.positions}
          team={position.team}
          desc={position.description}
          responsibilites={position.responsibilities}
          qualifications={position.qualifications}
          pref={position.pref}
        />
      ))}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScf1mWB3E_kplos6jVBxR_eDopiHW5Gbo_iZFkpyKQUsWgDAw/viewform">
        <button className="bg-gray-900 w-auto font-bold rounded-lg mt-8 md:mt-16 px-20 py-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-600  text-gray-200 text-center">
          <a
            className="style-none"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScf1mWB3E_kplos6jVBxR_eDopiHW5Gbo_iZFkpyKQUsWgDAw/viewform"
          >
            Apply Now
          </a>
        </button>
      </a>
    </section>
  );
};

//onClick rounded-lg for bottom dissapears and rounded-lg for top of desc dissapears
export default Recruitment;
