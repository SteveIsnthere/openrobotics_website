// import Category from "./Category";
import { Link } from "react-router-dom";

// 
// class Role {
//   title: string;
//   positions: string;
//   team: string;
//   description: string;
//   responsibilities: Array<string>;
//   qualifications: Array<string>;
//   pref: Array<string>;
//
//   constructor(
//     title: string,
//     positions: string,
//     description: string,
//     team: string,
//     responsibilities: Array<string>,
//     qualifications: Array<string>,
//     pref: Array<string>
//   ) {
//     this.title = title;
//     this.positions = positions;
//     this.team = team; // Only fill out for Robocup since Robocup has subteams
//     this.description = description;
//     this.responsibilities = responsibilities;
//     this.qualifications = qualifications;
//     this.pref = pref;
//   }
// }

// class Role_Category {
//   title: string;
//   positions: Array<Role>;
//
//   constructor(title: string, positions: Array<Role>) {
//     this.title = title;
//     this.positions = positions;
//   }
// }

const Recruitment = () => {
  // const admin_positions: Array<Role> = [
  //   new Role(
  //     // ADMIN TEAM ROLES
  //     "Graphic Designer",
  //     "1",
  //     "As UBC Open Robotics’ Graphic Designer, you will be in charge of handling all things graphic-related – social media posts, physical posters, and even team merch. You will work with the rest of the amazing Admin Team in order to preserve the team’s brand and aid in its growth.",
  //     "",
  //     [
  //       "Mock up and create social media posting for the team’s Instagram account",
  //       "Ensure UBC Open Robotics’ brand and colours are implemented throughout our social media presence",
  //       "Design physical promotional material such as banners and posters",
  //       "(Occasionally) Design team merch",
  //     ],
  //     [
  //       "Keen eye for visual design",
  //       "Creative passion",
  //       "Familiar with design software such as Adobe Photoshop / Illustrator & Figma",
  //     ],
  //     ["Design portfolio"]
  //   ),
  //   new Role(
  //     "Web Developer (Full-Stack)",
  //     "1-2",
  //     "We are looking for a web developer to assist with the expansion of our new Open Robotics website.",
  //     "",
  //     [
  //       "Discuss design requirements and new features with captains",
  //       "Mantain current codebase and write clean new code for the website",
  //       "Be a quick learner and open to using and learning new technologies",
  //     ],
  //     [
  //       "Proficient in JavaScript/TypeScript",
  //       "Experience with full-stack technologies like React, Node, and Express",
  //     ],
  //     [
  //       "Understanding and experience with NoSQL databases",
  //       "Experience with tailwindCSS",
  //     ]
  //   ),
  //   new Role(
  //     "Sponsorship and Engagement Manager",
  //     "1",
  //     "The Sponsorship and Engagement Manager position involves securing funds for team projects, which allows the team to purchase supplies for their project designs, as well as rapidly prototype and iterate. This position also includes organizing team events to promote learning while developing meaningful relationships among team members.",
  //     "",
  //     [
  //       "Secure sponsorships and other forms of funding for the team",
  //       "Plan and organize team events, including: workshops, guest speakers, social events (e.g., movie nights, games nights, etc.)",
  //       "Seek conference opportunities for team members to attend",
  //       "Communicate event details with the rest of the team",
  //     ],
  //     [
  //       "Experience in planning events",
  //       "Excellent verbal and written communication skills",
  //       "Excellent organizational skills",
  //     ],
  //     ["Experience in fundraising and obtaining sponsorships"]
  //   ),
  //   new Role(
  //     "Social Media Manager",
  //     "1",
  //     "The Social Media Manager position involves promoting the team on various social media platforms, as well as posting updates about the team’s progress and accomplishments.",
  //     "",
  //     [
  //       "Design and post social media content on Instagram, Facebook, Linkedin, etc. This includes collaborating with the graphic designer, creating captions, and generating written content for posts",
  //       "Communicate with captains, leads, graphic designer, and events and sponsorships manager",
  //       "Attend workshops, social events, outreach events, and full-team meetings to document pictures/videos for social media posts",
  //     ],
  //     [
  //       "Experience with video production and editing",
  //       "Excellent verbal and written communication skills",
  //     ],
  //     ["Experience with brand social media posts"]
  //   ),
  // ];
  // const robotraining_positions: Array<Role> = [
  //   // ROBOTRAINING ROLES
  //   new Role(
  //     "1st/2nd Yr Students",
  //     "Depending on interest",
  //     "Want to get your foot into the robotics industry? We’re looking to recruit bright-eyed first and second year students to give UBC Open Robotics some fresh blood. While these students will have responsibilities to carry out over the year, this role is less about what you can do for us and more about what we can do for you. We’re looking to train and tutor younger students and help transition them into excellent upper-year designers. We want to help you get more design, manufacturing, and assembly work - a perfect combination of hands-on experience. The responsibilities below outline skills we want to help you develop, so apply even if you don’t have them (yet)!",
  //     "",
  //     [
  //       "Use Computer-Aided Design (CAD) software to design/modify parts",
  //       "Learn how to use 3D printers to create rapid prototypes of your design",
  //       "Wire electrical connections using Dupont wires and soldering techniques",
  //       "Write Arduino code that will let your robot navigate autonomously",
  //       "Carry out organizational tasks and practice some presentational skills",
  //       "Learn more about good design practices and designing for manufacturing",
  //       "Participate in a design challenge that will pit you against your peers",
  //       "Learn how to **respectfully destroy your peers** in design challenges",
  //     ],
  //     [
  //       "Willingness to learn and grow as a student, engineer, and person",
  //       "Interest in robotics, mechanical design, and electromechanical components/machines",
  //       "Understanding of other people and able to acknowledge that there are always people of higher and lower skill level",
  //       "Alive and breathing (optional)",
  //     ],
  //     [
  //       "Previous experience with extracurricular teams",
  //       "Willingness to take on future leadership roles",
  //       "An appreciation for mechas of all sizes",
  //     ]
  //   ),
  // ];
  // const robocup_positions: Array<Role> = [
  //   // ROBOCUP@HOME ROLES
  //   new Role(
  //     "Senior Subteam Member (Mechanical Design)",
  //     "2-3",
  //     "We’re seeking experienced members for the Mechanical Arms subteam. As the subteam name suggests, we are responsible for the arms of our robot: this entails a dynamic arm designed for interacting with the environment, and a static arm engineered to provide support and consistently carry heavier loads. As a senior member on the team, you will play a crucial role in various aspects, including mechanical design, prototyping, assembly, and prototype testing. In addition, you will spearhead the conception and construction of a pivotal component for the forthcoming iteration of our 6-DOF articulated robotic arm, embodying a leadership position at the forefront of our advancements",
  //     "Arms",
  //     [
  //       "Lead the mechanical design and development of a critical component of the robotic arm (most likely one of the joints), including concept generation, detailed design, prototyping, and testing",
  //       "Participate in brainstorming sessions and contribute creative ideas to enhance the performance and functionality of mechanical components",
  //       "Utilize computer-aided design (CAD) software to create detailed and accurate 3D models of mechanical parts and assemblies",
  //       "Contribute to the development of prototypes, conducting testing, and iterating designs based on feedback and results",
  //       "Collaborate closely with cross-functional teams, including electrical engineers, software engineers, and researchers, to ensure seamless integration of mechanical components into complete robotic systems",
  //       "Conduct thorough mechanical analysis, simulations, and testing to validate and optimize designs for performance, reliability, and safety.",
  //       "Source and size required parts and components",
  //       "Develop and maintain documentation, including design specifications, technical reports, and engineering drawings",
  //       "Contribute to project planning, scheduling, and progress tracking to ensure timely delivery of projects",
  //     ],
  //     [
  //       "Preferably 2nd year + Majoring in Mechanical Engineering, or other related field",
  //       "Solid understanding of mechanical principles (Rigid Body Dynamics, Solid Mechanics, etc.)",
  //       "Proficiency in CAD, such as SolidWorks and Onshape, or other tools",
  //       "Experience with mechanical design methodologies and key mechanical parts (gears, bearings, etc.)",
  //       "Hands-on experience with rapid prototyping methods such as 3D printing, sheet metal bending, mills and lathes",
  //       "Excellent problem-solving skills and ability to adapt designs to evolving project needs",
  //       "Strong leadership and communication skills + ability to work collaboratively in a team environment",
  //     ],
  //     [
  //       "Experience with mechanical analysis and simulation tools (e.g., Finite Element Analysis) is advantageous",
  //       "Familiarity with robotic components, mechanisms, sensors, and actuators",
  //       "Prior participation in robotics competitions, projects, or research is a plus.",
  //     ]
  //   ),
  //   new Role(
  //     "Mechanical Subteam Member",
  //     "2-3",
  //     `We are currently seeking motivated and enthusiastic individuals to join our Mechanical Arms subteam. As the subteam name suggests, we are responsible for the arms of our robot: this entails a dynamic arm designed for interacting with the environment, and a static arm engineered to provide support and consistently carry heavier loads. As a valued member of our team, you will play a pivotal role in various aspects, including mechanical design, prototyping, assembly, and prototype testing. We highly encourage you to bring forth fresh and innovative ideas that can enrich our projects. This role presents an exceptional opportunity for personal and professional growth, enabling you to cultivate hands-on experience and enhance your grasp of mechanical design principles. We welcome applications from candidates who may not fulfill all of the qualifications, we highly value enthusiasm and unique perspectives.
  //     At this time in the design process, we are in the process of refining the dynamic arm – a 6-DOF articulated robotic arm – for the upcoming iteration of our robot. Joining our team at this juncture promises an exhilarating and rewarding experience as we embark on this exciting phase of development.
  //     `,
  //     "Arms",
  //     [
  //       "Participate in brainstorming sessions and contribute creative ideas to enhance the performance and functionality of mechanical components",
  //       "Utilize computer-aided design (CAD) software to create detailed and accurate 3D models of mechanical parts and assemblies",
  //       `Contribute to the development of prototypes, conducting testing, and iterating designs based on feedback and results`,
  //       `Collaborate closely with cross-functional teams, including the Electrical and
  //       Software subteams, to ensure seamless integration of mechanical components into complete robotic systems`,
  //       "Develop and maintain documentation, including design specifications, technical reports, and engineering drawings",
  //     ],
  //     [
  //       `Strong passion and enthusiasm for designing and building cool stuff!`,
  //       `Solid understanding of mechanical principles (Rigid Body Dynamics, Solid Mechanics, etc.)`,
  //       `Excellent problem-solving skills and ability to adapt designs to evolving project needs`,
  //       `Strong communication skills and ability to work collaboratively in a team environment`,
  //       `Adaptability and willingness to learn and grow`,
  //     ],
  //     [
  //       "Proficiency in CAD, such as SolidWorks and Onshape, or other tools",
  //       "Hands-on experience with rapid prototyping methods such as 3D printing, sheet metal bending, mills and lathes",
  //       "Experience with mechanical design methodologies and key mechanical parts (gears, bearings, etc.)",
  //       "Experience with designing robots or other electromechanical systems is a plus",
  //     ]
  //   ),
  //   new Role(
  //     "Electrical Subteam Member",
  //     "4-6",
  //     `The team developing the electrical hardware and firmware design of the robot’s arm is looking for new members of all experience levels. We are looking to recruit members for the design of: 1. New stepper motor drivesrs, 2. Wire harness, 3. Firmware`,
  //     "Arms",
  //     [
  //       `Assisting in the design of PCBs for motor drivers and other electrical subsystems`,
  //       `Design the wire harness for a 6-DOF robotic arm`,
  //       `Write firmware for a 6-DOF robotic arm`,
  //       `Collaborate with the Software and Mechanical subteams regarding integration`,
  //     ],
  //     [
  //       `Strong communication skills`,
  //       `1+ years of coding experience (no specific language requirement)`,
  //       `Basic circuit knowledge`,
  //     ],
  //     [
  //       "Experience with: PCB design software, Wire harness design, Experience with AVR and STM32 family of microcontrollers",
  //     ]
  //   ),
  //   new Role(
  //     "Firmware Developer",
  //     "4",
  //     `Your role involves designing, coding, and maintaining embedded firmware that drives the drivetrain, arm, and other vital components of the robot using STM32 and AVR microcontrollers, and RTOS. Collaborate with hardware and software teams to define interfaces, develop hardware drivers, and ensure reliable ROS integration. Implement real-time algorithms for sensor data processing, motor control, and communication protocols.`,
  //     "Firmware",
  //     [
  //       "Develop, debug and maintain embedded firmware for the robot using the STM32 microcontrollers running on CMSIS-RTOS using C/C++",
  //       "Collaborate with the software team to integrate ROS into the overall firmware architecture",
  //       "Collaborate with the electrical team to define clear interfaces and communication protocols between embedded software and hardware components",
  //     ],
  //     [
  //       "Experience developing within a Linux environment using terminals",
  //       "Experience using version control, in particular, git",
  //       "Proficient in C/C++ programming and debugging",
  //       "Understanding of MCU peripherals and modules (e.g. Timers, DMA, GPIO)",
  //       "Ability to read and understand complex circuit schematics",
  //       "Familiar with serial communication protocols (e.g. UART, SPI, I2C, CAN)",
  //     ],
  //     [
  //       "Experience with Makefile and GDB",
  //       "Experience with STM32/ Cortex M microcontrollers",
  //       "Understanding of RTOS concepts (e.g. task scheduling, inter-task communication)",
  //       "Experience in open-loop control systems using stepper motors",
  //     ]
  //   ),
  //   new Role(
  //     "Mechanical Subteam Lead",
  //     "1",
  //     `Mechanical members of the Drivetrain subteam are responsible for designing the bottom half of the robot, including the structural chassis, aesthetic casing, and powertrain. The work involves designing, machining/manufacturing, and integrating the designs with the Torso subteam.`,
  //     "Drivetrain",
  //     [
  //       "Plan project timelines, assign tasks to mechanical team members, and monitor progress",
  //       "Work closely with the electrical lead and members of the Drivetrain subteam to integrate electromechanical parts",
  //       "Communicate needs and progress with captains and other subteam leads",
  //       "Present subteam updates at full-team meetings",
  //       "Use Computer-Aided Design (CAD) to design and modify chassis and casings",
  //       "Use 3D printers to create rapid prototypes of the design",
  //       "Machine parts and assemble the Drivetrain",
  //       "Calculate and spec machine-design components, such as motors, gearboxes, and bearings",
  //     ],
  //     [
  //       "Strong project management and organizational skills",
  //       "Strong communication and problem-solving skills",
  //       "Ability to adapt designs as project needs evolve",
  //       "Proficient in CAD prototyping with software such as SolidWorks and Onshape",
  //       "Experience in Design for Manufacturing and Assembly (DFMA)",
  //       "Experience with 3D printers and rapid prototyping",
  //       "Experience with project-based learning",
  //     ],
  //     [
  //       "Machine shop experience",
  //       "Experience with Finite Element Analysis (FEA)",
  //       "Multi-tasking proficiency",
  //       "Post-secondary knowledge on electronics and exposure to electronic integration",
  //     ]
  //   ),
  //   new Role(
  //     "Mechanical Subteam Member",
  //     "3",
  //     "Mechanical members of the Drivetrain subteam are responsible for designing the bottom half of the robot, including the structural chassis, aesthetic casing, and powertrain. The work involves designing, machining/manufacturing, and integrating the designs with the Torso subteam.",
  //     "Drivetrain",
  //     [
  //       "Use Computer-Aided Design (CAD) to design and modify chassis and casings",
  //       "Use 3D printers to create rapid prototypes of the design",
  //       "Machine parts and assemble the Drivetrain",
  //       "Calculate and spec machine-design components, such as motors, gearboxes, and bearings",
  //       "Work closely with the electrical members of the Drivetrain subteam to integrate electromechanical parts",
  //     ],
  //     [
  //       "Strong passion and enthusiasm for designing and prototyping",
  //       "Proficient in CAD prototyping with software such as SolidWorks and Onshape",
  //       "Experience in Design for Manufacturing and Assembly (DFMA)",
  //       "Experience with 3D printers and rapid prototyping",
  //       "Experience with project-based learning",
  //       "Strong communication and problem-solving skills",
  //       "Ability to adapt designs as project needs evolve",
  //     ],
  //     [
  //       "Machine shop experience",
  //       "Experience with Finite Element Analysis (FEA)",
  //       "Multi-tasking proficiency",
  //     ]
  //   ),
  //   new Role(
  //     "Embedded System Hardware Designer",
  //     "4",
  //     `As an Embedded Hardware Engineer within our student design team for the RoboCup@Home competition, you will play a critical role in designing, developing, and implementing the drivetrain subsystem of our autonomous robot. Your expertise in embedded systems and hardware design will contribute to the success of our team's robot as it navigates and interacts in a home environment, completing various tasks and challenges set by the competition. This role offers a unique opportunity to apply theoretical knowledge to real-world robotic challenges, collaborate with multidisciplinary team members, and gain hands-on experience in advanced robotics technologies.`,
  //     "Drivetrain",
  //     [
  //       "Prepare and design the schematics, PCB placement and layout, and manufacturing and assembly files.",
  //       "Perform circuit simulation (SPICE) for design verification",
  //       "Select and integrate appropriate sensors, such as encoders and IMUs, to provide accurate feedback for navigation, and control algorithms.",
  //       "Convert board level requirements into a board design concept (architecture, I/Os, key parts, power dissipation estimate, u-controller, firmware, etc.), including the motor control loop.",
  //       "Perform board assembly and functional tests",
  //       "Coordinate with the Firmware team to finalize the functional concept and facilitate the integration",
  //     ],
  //     [
  //       "Circuit analysis, simulation and design",
  //       "Basic knowledge in serial communication protocols",
  //       "Familiar with hardware test equipment -- DMM, logic analyzers, oscilloscopes, function generator, etc.",
  //     ],
  //     [
  //       "Schematics capture and multi-layer PCB layout & routing experience using (Altium/KiCad/EAGLE/Ultiboard)",
  //       "Experience in designing high-power battery management system and/or buck converter",
  //       "Experience in open-loop control using stepper motors",
  //       "Experience in PCB assembly",
  //     ]
  //   ),
  //   new Role(
  //     "Head And Torso Subteam Member",
  //     "2-3",
  //     `The team developing the robot’s torso and head is looking for new members of all experience levels. We value commitment over experience, and members are expected to communicate with their lead regularly and complete tasks in a timely manner.`,
  //     "Head and Torso",
  //     [
  //       "Assist in the design and development of a prototype of the robot head and torso",
  //       "Collaborate closely with all other subteams to ensure seamless integration and holistic functionality of robotic systems",
  //       "Material selection for fittings/fixtures and components",
  //     ],
  //     [
  //       "Proficiency in CAD Design (Onshape)",
  //       "Experience with electrical and/or mechanical engineering projects",
  //     ],
  //     []
  //   ),
  //   new Role(
  //     "Gripper Subteam Lead",
  //     "1",
  //     `As the lead for the Gripper subteam, you will oversee the fabrication of the gripper, the integration of electrical and mechanical components, and the integration with the Arms subteam.`,
  //     "Gripper",
  //     [
  //       "Cross-disciplinary Leadership: Lead a multidisciplinary team, including electrical and mechanical engineers, fostering collaboration and ensuring effective communication between team members.",
  //       "Electromechanical Integration: Coordinate the seamless integration of electrical components, such as sensors, actuators, and control systems, with mechanical components to create cohesive solutions.",
  //       "Project Management: Plan project timelines, allocate resources, and monitor progress to ensure timely delivery the gripper",
  //       "Collaboration: Collaborate closely with other subteams, such as Software and Arms, to ensure seamless integration and holistic functionality of robotic systems.",
  //     ],
  //     [
  //       "Upper year (3rd or higher but exceptions can apply if you can demonstrate experience) student in Electrical, Integrated, Computer, or Engineering Physics.",
  //       "Project experience with robotics or integrated circuits with sensors and actuators.",
  //       "Proficiency in CAD Design",
  //       "Project management experience.",
  //       "Strong leadership qualities",
  //       "Proficiency in design and simulation tools",
  //       "Familiarity with programming languages for control systems and automation",
  //     ],
  //     ["Prior design team experience"]
  //   ),
  //   new Role(
  //     "Mechanical Subteam Member",
  //     "1",
  //     `As part of the Gripper subteam, you will be working on the gripper of our robot that is planned to be used in the RoboCup@Home competition. You will be working hands-on on building and testing the gripper prototype, and integrating it with the electrical components and arm.`,
  //     "Gripper",
  //     [
  //       "Collaborate to design and develop mechanical aspects of the gripper, ensuring optimal performance and reliability.",
  //       "Make and edit iterations of the CAD model of the gripper",
  //       "Build and test the working prototype of the gripper",
  //       "Collaborate with the Electrical and Software subteams to ensure seamless integration of mechanical components with electrical systems and software interfaces.",
  //     ],
  //     [
  //       "Basic understanding of machine design.",
  //       "Familiarity with CAD software",
  //       "Interest in robotics, mechatronics, or automation.",
  //       "Problem-solving mindset and eagerness to learn and troubleshoot.",
  //       "Effective communication and teamwork skills.",
  //     ],
  //     ["Hands-on 3D printing experience"]
  //   ),
  //   new Role(
  //     "Electrical Subteam Member",
  //     "3",
  //     `As part of the subteam, you will be working on the gripper of our robot that is planned to be used in the RoboCup@Home competition. You will be researching, testing, and attaching sensors and motors, as well as some low-level coding to the robot hand. In addition, there will be some integration that is required with other subteams, such as Arms and Software.`,
  //     "Gripper",
  //     [
  //       "Collaborate to design and develop electrical systems that control the gripper's functionality, ensuring optimal performance and reliability.",
  //       "Create circuit diagrams and read schematics for various electrical components, including sensors, actuators, motor controllers, and communication interfaces.",
  //       "Research and select appropriate electrical components, considering factors such as efficiency, durability, compatibility, and cost-effectiveness.",
  //       "Collaborate with the Mechanical and Software subteams to ensure seamless integration of electrical systems with mechanical components and software interfaces.",
  //     ],
  //     [
  //       "Basic understanding of electrical system components and circuitry.",
  //       "Familiarity with fundamental electronics principles.",
  //       "Some experience with design and simulation tools.",
  //       "Interest in robotics, mechatronics, or automation.",
  //       "Problem-solving mindset and eagerness to learn and troubleshoot.",
  //       "Effective communication and teamwork skills.",
  //     ],
  //     ["Circuitry experience, especially in the sensor or motor department"]
  //   ),
  //   new Role(
  //     "Software Subteam Member",
  //     "6-7",
  //     `As a software subteam member, you will be responsible for developing, testing, and integrating software that controls the robot. This software includes command and communication, controls, tasking, machine learning, and computer vision to operate and direct the various subsystems of the robot.
  //
  //     You will have the opportunity to interact with simulated and real-world versions of the robot and components to test the software.
  //     `,
  //     "Software",
  //     [
  //       "Speech: Develop software (Python) and train/utilize machine learning models for natural language processing (NLP), speech synthesis, and key word recognition to enable natural human-to-robot interactions.",
  //       "Navigation: Develop software (Python, and some C/C++) for navigation tasks. This includes position determination and mapping in various environments, simulation, integration with hardware, obstacle avoidance, course navigation, and path planning.",
  //       "Manipulation (Robotic Arm): Develop software (Python, and some C/C++) to control a robotic arm to achieve real-world tasks. This includes software for motion planning, simulation, integration with hardware, and integration with computer vision for object pickup.",
  //       "Computer Vision: Develop software (Python) and train/utilize machine learning models for robot vision tasks. This includes object detection, person tracking, activity recognition, hardware integration (camera), and integration of a vision pipeline with Navigation and Arm teams.",
  //       "Integration: Develop software (Python) for high-level tasking and logic that combines the functionalities of the subsystems.",
  //     ],
  //     ["Experience with Python", "Basic understanding of robots"],
  //     [
  //       "Experience with C/C++",
  //       "Experience with Git",
  //       "Experience with Linux",
  //       "Experience with ROS (Robot Operating System)",
  //       "Experience with CAD modeling and URDFs",
  //       "Knowledge of control systems",
  //     ]
  //   ),
  // ];
  // const pianobot_positions: Array<Role> = [
  //   // PIANOBOT ROLES
  //   new Role(
  //     "Mechanical Subteam Member",
  //     "1",
  //     `Pianobot Mechanical Team Member`,
  //     "",
  //     [
  //       "Designing and developing physical parts using manufacturing methods such as 3D printing and CNC waterjet/laser cut. This includes considering manufacturing methods when designing parts and knowing how it is manufactured + the limitations it has",
  //       "Calculating estimates to be able to select the correct motors for the task",
  //       "Material selection for fittings/fixtures and components",
  //     ],
  //     [
  //       "Experience with some form of CAD (e.g., SolidWorks or Onshape)",
  //       "Ability to visualize concepts/mechanics or able to explain them through drawings",
  //       "Clear and constant communication skills",
  //     ],
  //     [
  //       "Previous experience with actuation methods (Linear Actuators such as rails and belts, actuator drives, such as steppers and servos, and how to set them up)",
  //       "A bit of knowledge on the electrical portion (e.g., microcontroller hookup I/O and power requirements). It helps to know the limitations of other subsections to be able to design around it",
  //     ]
  //   ),
  //   new Role(
  //     "Electrical Subteam Lead",
  //     "1",
  //     "Pianobot Electrical Subteam Lead",
  //     "",
  //     [
  //       "Designing and developing custom PCBs to streamline circuits and aesthetics.",
  //       "Finding and implementing breakout boards/components to power and support the mechanical actuators",
  //       "Ensuring that parts are software-compatible",
  //       "Assembling, testing, and troubleshooting electrical circuits and firmware",
  //       "Communicating and presenting progress and needs to other subteam leads",
  //       "Administration work, including funding applications, meeting minutes, and project management",
  //       "Assigning tasks to subteam members and working together",
  //     ],
  //     [
  //       "Knowledge about some form of schematic drawing software (e.g., Altium, Kicad, etc.)",
  //       "Power electronics: knowing how to calculate and account for the system’s overall power consumption",
  //       "Able to solder (wire connections and SMD components",
  //     ],
  //     [
  //       "Circuit protection: How to prevent overloads and other electrical failures from occurring",
  //       "Understanding how a piano is played/able to play piano",
  //     ]
  //   ),
  //   new Role(
  //     "Electrical Subteam Member",
  //     "1-2",
  //     `Pianobot Electrical Team Member`,
  //     "",
  //     [
  //       "Designing and developing custom PCBs to streamline circuits and aesthetics.",
  //       "Finding and implementing breakout boards/components to power and support the mechanical actuators",
  //       "Ensuring that parts are software-compatible (this requires you to be able to communicate with the Software subteam)",
  //       "Assembling, testing, and troubleshooting electrical circuits and firmware (Will work with Mechanical subteam and Software subteam depending on what is being tested)",
  //     ],
  //     [
  //       "Knowledge about some form of schematic drawing software (e.g., Altium, Kicad, etc.)",
  //       "Power electronics: knowing how to calculate and account for the system’s overall power consumption",
  //       "Able to solder (wire connections and SMD components",
  //     ],
  //     [
  //       "Circuit protection: How to prevent overloads and other electrical failures from occurring",
  //       "Understanding how a piano is played/able to play piano",
  //     ]
  //   ),
  // ];

  // const admin_category: Role_Category = new Role_Category(
  //     "Admin Roles",
  //     admin_positions
  // );
  // const robotraining_category: Role_Category = new Role_Category(
  //     "RoboTraining Roles",
  //     robotraining_positions
  // );
  // const robocup_category: Role_Category = new Role_Category(
  //     "Robocup Roles",
  //     robocup_positions
  // );
  // const pianobot_category: Role_Category = new Role_Category(
  //     "Pianobot Roles",
  //     pianobot_positions
  // );

  // const categories: Array<Role_Category> = [
  //     admin_category,
  //     robotraining_category,
  //     robocup_category,
  //     pianobot_category,
  // ];

  // const jobPostings = [
  //   {
  //     title: "Co/Vice-Captain",
  //     description: "Managing the team’s admin and technical operations.",
  //     applyLink:
  //       "https://docs.google.com/document/d/1sJ-z3hVBgMQWQ5o8oixhh0RBy43hopNZqzGIOAqr2k4/edit?usp=sharing",
  //   },
  //   {
  //     title: "Web Developer",
  //     description:
  //       "Maintaining and enhancing the club's showcasing and recruitment application.",
  //     applyLink:
  //       "https://docs.google.com/document/d/1t7u2CEvSddQwjojW3a7F0taRfbT_UjMPczQCLiiv4bM/edit?usp=sharing",
  //   },
  //   {
  //     title: "Engagement Manager / Event Planner",
  //     description: "Securing funds for team projects.",
  //     applyLink:
  //       "https://docs.google.com/document/d/1YpM-NLXFCYxkfMgwoPqNNg5H4BRbFGULSXjyxQMkxl0/edit?usp=sharing",
  //   },
  //   {
  //     title: "Finance and Sponsorship Manager",
  //     description:
  //       "Securing funds for team projects, whether it be grants, sponsorships, or in-kind donations.",
  //     applyLink:
  //       "https://docs.google.com/document/d/1RIAQz8juVQDXEWOe7CZP6qBJNQRr3NQLSN5wVFzTknI/edit?usp=sharing",
  //   },
  //   {
  //     title: "Social Media Manager",
  //     description: "Promoting the team on various social media platforms.",
  //     applyLink:
  //       "https://docs.google.com/document/d/1OBgq28w0HNbfb6nxhpJjXQcc89jfz00gbujwjDL-8ko/edit?usp=sharing",
  //   },

  //   {
  //     title: "ROBOCUP@HOME Power System Member",
  //     description:
  //       "Playing a critical role in designing, developing, and implementing the power distribution subsystem of our autonomous robots.",
  //     applyLink:
  //       "https://docs.google.com/document/d/1J8jZ0ib5pnoGQwY-OZVyOrW_kq_mh5dDVycxXJUsojw/edit?usp=sharing",
  //   },
  //   {
  //     title: "ROBOCUP@HOME Arms Electrical Designer",
  //     description:
  //       "Working on the electrical hardware and firmware design of a 6-DOF robotic arm.",
  //     applyLink:
  //       "https://docs.google.com/document/d/1od1zaU3qQNR66whR_8qKptgv19b3TKn4G7m0Ze_RUN4/edit?usp=sharing",
  //   },
  //   {
  //     title: "ROBOCUP@HOME Chassis Mechanical Designer",
  //     description:
  //       "Working on the chassis, all-wheel-drive drivetrain, and torso of a robot.",
  //     applyLink:
  //       "https://docs.google.com/document/d/1r7O46H4w34Sng4XUMWh90ulRybh7kDsas4xVbJ3b99g/edit?usp=sharing",
  //   },

  //   {
  //     title: "ROBOCUP@HOME Gripper",
  //     description:
  //       "Design and build the mechanical and electrical aspects of the end effector of our robot in order to improve its grasping capabilities.",
  //     applyLink:
  //       "https://docs.google.com/document/d/122C5sPPyW--IP_Ie8JEwXuKYDvxckSCnAho4hnAXGRo/edit",
  //   },

  //   {
  //     title: "ROBOCUP@HOME Software Subteam Member",
  //     description:
  //       "Develop, test, and integrate the software that controls the robot.",
  //     applyLink:
  //       "https://docs.google.com/document/d/1ZqmK2oL3iYF0HVvD4w9ESDJiXamYVdbEMh0h3yva6cQ/edit?usp=sharing",
  //   },
  // ];

  return (
    <section className="flex flex-col m-[10%] py-10 md:mt-24 sm:mt-30 xs:mt-60 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl justify-center items-center">
      <h1 className="text-3xl py-4 font-extrabold md:text-5xl text-gray-900">
        Join Us!
      </h1>
      <span className="w-64 h-[2px] mt-0 bg-gray-900 mb-6"></span>
      <h1 className="text-2xl py-2 font-light md:text-4xl text-gray-700 max-w-l">
      Our recruitment cycle is in full swing right now! If you're interested
        in joining, apply for a technical or admin position using the following <a className="font-medium text-red cursor-pointer underline hover:text-red:700" href="https://docs.google.com/forms/d/e/1FAIpQLScWN8Gqa_pe9x6g9SmL_UFGCFLdUMXr94qaeg-mxM5_oQ6nOg/viewform">Google Forms Link</a>. Note that our
        applications are open to students across all faculties and of varying
        skill levels. We look forward to your applications! For further
        questions, please contact us <Link className="font-medium text-red cursor-pointer hover:text-red-700 underline" to="/Contact">here</Link>.
        </h1>
        <br/><br/>

        <p className="font-medium text-medium max-w-l">Note: We strongly encourage anyone with a strong interest and
        passion to design and manufacture to apply, regardless of current
        experience. Our team values highly-motivated students who are willing to
        learn and take initiative.
        </p>

      <p className="py-4 text-md md:text-xl  text-gray-500">
        {/* Our Recruitment cycle is in full swing right now! If you're interested
        in joining, apply for a technical or admin position here. Note that our
        applications are open to students across all faculties and of varying
        skill levels. We look forward to your applications! For further
        questions please{" "} */}
        {/* <Link
          className="font-bold text-red-500 cursor-pointer hover:text-red-700"
          to="/Contact"
        >
          contact
        </Link>{" "}
        us */}
        {/* <br></br> <br></br>
        <b>Note:</b> We strongly encourage anyone with a strong interest and
        passion to design and manufacture to apply, regardless of current
        experience. Our team values highly-motivated students who are willing to
        learn and take initiative. */}
      </p>

      {/*<p className="py-4 text-md md:text-xl  text-gray-500">*/}
      {/*  Stay connected for upcoming opportunities.*/}
      {/*</p>*/}
      {/*{categories.map((category: Role_Category) => (*/}

      {/*    <Category*/}
      {/*    name={category.title}*/}
      {/*    positions={category.positions}*/}

      {/*  />*/}
      {/*))}*/}
      {/*<button className="bg-gray-900 w-auto font-bold rounded-lg mt-8 md:mt-16 px-20 py-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-600  text-gray-200 text-center">*/}
      {/*  <a*/}
      {/*    className="style-none"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*    href="https://forms.gle/3CuSFmSuLybh3duXA"*/}
      {/*  >*/}
      {/*    Apply Now*/}
      {/*  </a>*/}
      {/*</button>*/}

      {/* THE APPLY BUTTON */}
      {/* <button className="bg-gray-900 w-auto font-bold rounded-lg mt-8 md:mt-16 px-20 py-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-600  text-gray-200 text-center">
        <a
          className="style-none"
          target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          Apply Now
        </a>
      </button> */}
      {/* <h2 className="text-3xl font-bold text-center mb-8">Postings</h2> */}
      {/* <button className="bg-blue-500 w-64 font-bold rounded-lg px-12 py-4 text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-blue-700 text-white text-center mb-8">
        <a
          className="style-none"
          target="_blank"
          rel="noopener noreferrer"
          href="https://forms.gle/5S7c2KVK7hVnP82w8" // Replace with the actual link
        >
          Recruitment Form
        </a>
      </button> */}

      {/* <div className="max-w-3xl mx-auto">
        {jobPostings.map((job, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <button className="bg-gray-900 w-auto font-bold rounded-lg mt-8 md:mt-16 px-20 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-600 text-gray-200 text-center">
              <a
                className="style-none"
                target="_blank"
                rel="noopener noreferrer"
                href={job.applyLink} // Dynamically set the applyLink for each job
              >
                Job Posting
              </a>
            </button>
          </div>
        ))}
      </div> */}
    </section>
  );
};

//onClick rounded-lg for bottom dissapears and rounded-lg for top of desc dissapears
export default Recruitment;
