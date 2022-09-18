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
  qualifications : Array<string>;
  pref : Array<string>;

  constructor(
    title: string,
    positions: string,
    description: string,
    team: string,
    responsibilities: Array<string>,
    qualifications:Array<string>,
    pref: Array<string>,
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
  // const positions: Array<Role> = [
  //      new Role(
  //        "Admin Member",
  //        '2',
  //        "We are looking for finance members to join our current administration team. This position will involve collaboration with the captains, and project leads to help secure sponsorships and other forms of funding for the team. ",
  //        "Finance",
  //        ["Seeking and applying for fundraising opportunities", 
  //         "Contacting prospective sponsors via email/phone",
  //         "Working closely with the leads to ensure that the financial needs of the team are primarily met through the sponsorships pursued", 
  //         ],
  //        ["Sauder School of Business student in any year is preferred",
  //         "Experience in fundraising and obtaining sponsorships", 
  //         "2 hours of commitment weekly, excluding weekend meetings and sponsorship work sessions", 
  //         "Excellent verbal and written communication skills ",
  //         "Superb organizational skills"],
  //        ["Experience with crowdfunding campaigns would be an asset",
  //         "Experience with pivot tables would be helpful",
  //         ],
  //      ),
  //      new Role(
  //        "Mechanical Designer",
  //        '1',
  //        "We are looking for additional mechanical sub-team members on Pianobot to assist in the designing of the pedal as well as making improvements to the current design.",
  //        "PianoBot",
  //        ["Attending up to 2 hours of general and sub-team meetings weekly",
  //        "Assisting in the design process of the pedal and hands, this includes the modeling and the movement system.", 
  //        "Using CAD for modeling and simulating (Solidworks and OnShape)"],
  //        ["Mechanical engineering major with CAD experience", 
  //         "Proficient with SolidWorks and OnShape", 
  //         "Able to work in a team!", 
  //         ],
  //        ["Comfortable taking initiative and responsibility for sub-projects", 
  //         "Effectively communicates with the team", 
  //         ], 
  //      ),
  //      new Role(
  //        "Electrical Engineer",
  //        '3',
  //        "Our Robocup@Home project involves cutting-edge R&D in the realm of service robotics. The team is progressing towards competing in the internationally-acclaimed Robocup Competition, @Home League. The Arms team is responsible for determining specifications, designing, and building an autonomous robotic manipulator for our Robocup@Home robot. This position focuses on the electrical side of the arm, but there will be collaboration with the mechanical team. ",
  //        "Robocup Arms",
  //        ["Assisting in the electrical design of the robotic arm including the arm’s control and power circuits", 
  //         "Work with other electrical team members to design and build electrical test equipment ",
  //         "Perform detailed validation and specification testing on hardware ",
  //         "components and various stages of prototypes ",
  //         "Write basic libraries in device firmware for integration",],
  //        ["Have experience working with circuit design", 
  //         "Preference given to candidates who have done at least one work term in the field of electrical engineering ",
  //         ],
  //        [],
  //      ),
  //      new Role(
  //       "Electrical Engineer",
  //       '3',
  //       "Our Robocup@Home team is progressing toward competing in the Robocup@Home competition for service robots. The Drivetrain team is responsible for designing and building the electrical portion of the drivetrain for our Robocup@Home robot. We have completed the design stage and are moving on to the testing stage with parts on the way. We would be involved in assembling and testing the drivetrain in the upcoming months. ",
  //       "Robocup Drivetrain",
  //       ["Design and test the firmware for the drivetrain", 
  //        "Create and test the various electrical components of the drivetrain ",
  //        "Work with the mechanical sub-team to integrate the mechanical and electrical parts ",
  //        "Collaborate with the software sub-team for firmware integration and QA", ],
  //       ["Familiarity with circuit design and analysis ",
  //         "Experience with lab equipment (i.e. Oscilloscopes, power supplies)", 
  //         "PCB design experience ",
  //         ],
  //       [],
  //      ),
  //      new Role(
  //       "Mechanical Designer",
  //       '2',
  //       "As mentioned on our website, the Robocup@Home project involves cutting-edge R&D in the realm of service robotics. The team is progressing towards competing in the internationally-acclaimed Robocup Competition, @Home League. The Gripper team is responsible for determining specifications, designing, testing, prototyping, and building a gripper claw for our Robocup@Home robot. ",
  //       "Robocup Gripper",
  //       [ "Reading various research papers on various implementations of robotic grippers ",
  //         "Using Computer-Aided Design (CAD) software to design a functional robotic gripper", 
  //         "Creating a Bill of Materials (BOM) with accurate documentation on where parts can be acquired, as well as pricing for funding applications ",
  //         "Manufacturing and assembling the arm ",
  //         "Working with electrical team to incorporate electrical systems into mechanical systems ",
  //         "Working with the Arms subteam for overall robotic integration with gripper ",
  //         ],
  //       ["Minimum second year standing" ,
  //        "Proficient in CAD prototyping with software such as Solidworks and Onshape, with emphasis on Finite Element Analysis (FEA)", 
  //         "Experience in Design for Manufacture and Assembly (DFMA)",
  //         "Machine shop experience is a bonus",
  //       ],
  //       [],
  //      ),
  //      new Role(
  //       "1st year/2nd year MECH Student",
  //       ' ',
  //       "We’re looking to recruit bright-eyed first and second year students to give UBC Open Robotics some fresh blood. While these students will have responsibilities to carry out over the year, this role is less about what you can do for us and more about what we can do for you. We’re looking to train and tutor younger students and help transition them into excellent upper-year designers. We want to help you get more design, machining/manufacturing, and assembly work - a perfect combination of hands-on experience. Within the team, we have leadership roles we are looking to fill in the upcoming future. Step in and step up to not only become a stellar engineer, but also a confident leader. ",
  //       "Robocup Arms & Drivetrain",
  //       [ "Learn Computer-Aided Design (CAD) software to design/modify robotic manipulators", 
  //       "Learn how to use 3D printers to create rapid prototypes of your design", 
  //       "Learn how to calculate and spec machine-design components such as motors, gearboxes, and bearings", 
  //       "Find out why it is important to work closely with the ELEC sub-team to integrate electromechanical parts", 
  //       "Carry out organizational tasks and practice some presentational skills", 
  //       "Learn more about good design practices, leadership techniques, and management skills ",
  //       "Participate in a design challenge that will pit you against your peers ○ Learn how to respectfully destroy your peers in design challenges",],
  //       ["1st and 2nd years with MECH standing preferrable",
  //         "Willingness to learn and grow as a student, engineer, and person",
  //         "Interest in robotics, mechanical design, and electromechanical components/machines", 
  //       "Understanding of other people and able to acknowledge that there are always people of higher and lower skill level", 
  //       "Alive and breathing", 
  //       ],
  //       [ "Previous experience with extracurricular teams", 
  //         "Previous experience in leadership roles", 
  //         "Previous experience in being a nerd",
  //         ],
  //      ),
  //      new Role(
  //       "Mechanical Designer",
  //       '2',
  //       "We’re looking to recruit MECH Designers for the Arm and Torso team in order to improve, iterate, and prototype our robot designs. This naturally involves a lot of design, machining/manufacturing, and assembly work - a perfect place to get more hands-on experience. As the team name might suggest, the Arm and Torso team are responsible for the upper half of the robot; this consists of a dynamic arm to interact with the environment, a static arm to support and carry loads, and a torso to provide extra directional translation, act as a skeletal support structure, and house the many mechanical and electrical components for the robot. Within the team, we have leadership roles we are looking to fill in the upcoming future. Step in and step up to not only become a stellar engineer, but also a confident leader." ,
  //       "Robocup Arms & Drivetrain",
  //       ["Use Computer-Aided Design (CAD) software to design/modify robotic manipulators", 
  //       "Use 3D printers to create rapid prototypes of your design", 
  //       "create machine parts and assemble the Arm and Torso", 
  //       "Calculate and spec machine-design components such as motors, gearboxes, and bearings", 
  //       "Work closely with the ELEC sub-team to integrate electromechanical parts",
  //       "Learn more about good design practices, leadership techniques, and management skills",
  //       ],
  //       ["Preffered 3rd or 4th year with MECH standing",
  //       "Proficient in CAD prototyping with software such as SolidWorks and Onshape", 
  //       "Experience in Design for Manufacturing and Assembly (DFMA)",
  //       "Experience with 3D printers and rapid prototyping", 
  //       "Experience with project-based learning", 
  //       "Not a robot", 
  //         ],
  //       ["Machine shop experience", 
  //        "Experience with Finite Element Analysis (FEA)", 
  //         "Multi-tasking proficiency", 
  //         "Have post-secondary knowledge on electronics and exposure to electronic integration", 
  //         "Can rub your tummy and pat your head at the same time",
  //         ],
  //      ),
  //      new Role(
  //       "Software Programmer",
  //       '2',
  //       'We are looking for enthusastic students with strong problem solving abilities, excellent communication, and desire to learn. Technically, a solid foundation of high/low-level programming is desired but not required. Students who are looking to gain their first design team experience or extend off previous experience should not hesitate to apply and be apart of designing Pianobot’s C++ / Python pathing optimization algorithms, Arduino microcontroller program, and Machine learning related features. ',
  //       "PianoBot",
  //       ['Attending up to 2 hours of general and sub-team meetings weekly',
  //        'Assist in the implementation and design of the Pianobot hands’ pathing algorithm',
  //        'Program in C++, Python, and Arduino to implement software functionality',
  //        'Conduct software unit and integration tests',
  //        'Aid our new machine learning features'],
  //       ['Eagerness to learn',
  //        'Comfortable taking initiative and responsibility for sub-projects',
  //        'Strong debugging and problem solving skills',
  //        'Excellent and effective written and verbal communication skills',
  //        'Exposure to high and low level programming methodologies and implementatio',],
  //       ['Experience in Arduino, C/C++, Python',
  //        'Interest or knowledge on machine learning / AI',
  //        'Exposure to version control software (Git)',
  //        'CPEN, CPSC, and/or ELEC students with a minimum of second year standing are preferred but first year students are highly encouraged to apply'],
  //     ),
  //      new Role(
  //        "Electrical Engineer",
  //        '2',
  //        'Pianobot project allows students with a passion for music and robotics to combine their interests into one fun project! Modeled off the standards of the Royal Conservatory of Music (RCM), students are aiming to have the robot play music pieces designed for pianists with qualifications of RCM level 4. The Pianobot team is composed of 3 subteams: software, electrical, and mechanical. Each group is involved in collaborating to design and build the robot. We are looking for additional electrical sub-team members for PianoBot that are here to stay!',
  //        "PianoBot",
  //        ['Attending up to 2 hours of general and sub-team meetings weekly',
  //         'Assisting in the design and testing of electrical designs'],
  //        ['Electrical Major with work/project experience (2nd year +)',
  //         'Experience with circuit prototyping and debugging',
  //         'Experience with using electrical test equipment',
  //         'Able to work with a team'],
  //        ['Experience with PCB testing and design',
  //         'Comfortable taking initiative and responsibility for sub-projects',
  //         'Effectively communicates with the team',
  //         'Eager to learn and provide insight'],
  //      )
  // ];

  return (
    <section className="flex flex-col m-[10%] py-10 md:mt-24 sm:mt-30 xs:mt-60 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl justify-center items-center">
      <h1 className="text-3xl py-1 font-extrabold md:text-5xl text-gray-900">
        Current Openings
      </h1>
      <h1 className="text-2xl py-2 font-light md:text-3xl text-gray-700">
        Thank you for your interest!
      </h1>
      <p className="py-4 text-md md:text-lg  text-gray-500">
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
      </p>
      {/* {positions.map((position: Role, idx) => (
        <Position
          key = {idx}
          name={position.title}
          positions={position.positions}
          team={position.team}
          desc={position.description}
          responsibilites = {position.responsibilities}
          qualifications={position.qualifications}
          pref = {position.pref}
        />
      ))}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3gXI7-Wx2bf5JzFZQ1d_V23NmdevU3bnw-bl2jprFZVTing/viewform?usp=sf_link">  
      <button className="bg-gray-900 w-auto font-bold rounded-lg mt-8 md:mt-16 px-20 py-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-600  text-gray-200 text-center">
        <a className="style-none" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe3gXI7-Wx2bf5JzFZQ1d_V23NmdevU3bnw-bl2jprFZVTing/viewform?usp=sf_link">Apply Now</a>
      </button>
      </a> */}
    </section>
  );
};

//onClick rounded-lg for bottom dissapears and rounded-lg for top of desc dissapears
export default Recruitment;
