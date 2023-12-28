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
      "OpBots Captain",
      "im",
      "im",
      "assets/img/admin/JD New.jpg",
      "im"
    ),
    // new Person("Matthew Poon", 'OpBots Captain', 'https://www.linkedin.com/in/matthew-poon-73626220b/?originalSubdomain=ca', 'im', "assets/img/admin/matthew.png", 'im'),
    // new Person("Fouad Elgamal", 'OpBots Captain', 'https://www.linkedin.com/in/fouad-elgamal/', 'im', "assets/img/admin/fouad.jpg", 'im'),
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
      "Steve Wang",
      "Web Developer",
      "www.linkedin.com/in/steve-wang-895ba3214",
      "https://github.com/SteveIsnthere",
      "assets/img/software/Steve_Wang.jpg",
      "npminitfailed@gmail.com"
    ),
    new Person(
      "Kunal Bhasin",
      "Graphic Designer",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Shoue Nariyoshi",
      "Social Media Manager",
      "im",
      "im",
      "assets/img/admin/Shoue_Nariyoshi.jpg",
      "im"
    ),
    // new Person("Sashank Shukla", 'Web Developer', 'https://www.linkedin.com/in/sashank-shukla/', 'im', 'assets/img/admin/sashank.jpg', 'im'),
    // new Person("Inzaghi Moniaga", 'Web Developer', 'https://www.linkedin.com/in/inzaghi-moniaga-3692b7171/?originalSubdomain=ca', 'https://github.com/InMDev', 'assets/img/admin/inzaghi.jpg', 'https://inzaghi.tech/'),
    // new Person("Ben Lu", 'Graphic Designer', 'https://www.linkedin.com/in/-ben-lu-/', 'im', 'assets/img/admin/ben.png', 'im'),
    // new Person("Dhriti Bansal", 'Social Media Manager', 'https://www.linkedin.com/in/dhriti-bansal/', 'im', 'assets/img/admin/dhriti.jpg', 'im'),
    // new Person("Kritika Joshi"   , 'Integration Lead' ,     'im' , 'im' , 'assets/img/admin/kritika.png'   , 'im'),
    // new Person("Niki Manesh"     , 'Mentor'           ,     'im' , 'im' , 'assets/img/admin/niki.png'      , 'im'),
    // new Person("Brian Zimmerman" , 'Finance Lead'     ,     'im' , 'im' , 'assets/img/admin/brian.png'     , 'im'),
    // new Person("Nafae Saiyed"    , 'Finance Member'   ,     'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    // new Person("Taymur Pasha"    , 'Finance Member'   ,     'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    // new Person("Jay Hou"         , 'Finance Member'   ,     'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    // new Person("Tian Hao Xu"     , 'Safety Officer'   ,     'im' , 'im' , 'assets/img/admin/tian.png'      , 'im'),
  ];
  const PianoBot: Array<Person> = [
    new Person(
      "Samuel Krisetia",
      "Electrical Lead",
      "im",
      "im",
      "assets/img/pianobot/Samuel_Krisetia2.png",
      "im"
    ),
    new Person(
        "Kai Shang",
        "Mechanical Lead",
        "im",
        "im",
        "assets/img/arm/Kai Shang.jpg",
        "im"
    ),
    new Person(
        "Gunbir Baveja",
        "Software Lead",
        "im",
        "im",
        "assets/img/default_profile.jpg",
        "im"
    ),
    new Person(
      "Ryan Luke Acapulco",
      "Software Lead",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    // new Person("Shawna Naderi"        , 'PianoBot Lead'   , 'im' , 'im' , "assets/img/pianobot/shawna.png"   ,'im'),
    // new Person("Veronica Nguyen", 'Software Lead', 'https://www.linkedin.com/in/n-veronica/', 'im', "assets/img/pianobot/veronica.png", 'im'),
    // new Person("Samuel Krisetia", "Mechanical Lead", "https://www.linkedin.com/in/samuel-krisetia-515663161/", "im", "assets/img/default_profile.jpg", "im")
    // new Person("Evan Liu"             , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/evan.png"     ,'im'),
    // new Person("Fernando Ng"          , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/fernando.png" ,'im'),
    // new Person("Karthik Ravichandran" , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/karthik.png"  ,'im'),
    // new Person("Prayus Shrestha"      , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/prayus.png"   ,'im'),
    // new Person("Ryan Acapulco"        , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/ryan.png"     ,'im'),
    // new Person("Scott Beaulieu"       , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/scott.png"    ,'im'),
    // new Person("Yiting Wu"            , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/yiting.png"   ,'im'),
  ];
  // const ArtBot: Array<Person> = [
  //   new Person(
  //     "Aiden Smith",
  //     "ArtBot Lead",
  //     "im",
  //     "im",
  //     "assets/img/artbot/aiden.png",
  //     "im"
  //   ),
  //   new Person(
  //     "Navneeth Devadas",
  //     "ArtBot Member",
  //     "im",
  //     "im",
  //     "assets/img/default_profile.jpg",
  //     "im"
  //   ),
  //   new Person(
  //     "Felice Jie Chen",
  //     "ArtBot Member",
  //     "im",
  //     "im",
  //     "assets/img/default_profile.jpg",
  //     "im"
  //   ),
  //   new Person(
  //     "Benji Li",
  //     "ArtBot Member",
  //     "im",
  //     "im",
  //     "assets/img/artbot/benji.png",
  //     "im"
  //   ),
  // ];
  const Arm: Array<Person> = [
    new Person(
      "Matthew Sam",
      "Electrical Lead",
      "im",
      "im",
      "assets/img/arm/Matthew_Sam2.png",
      "im"
    ),

    new Person(
      "Danny Han",
      "Mechanical Lead",
      "im",
      "im",
      "assets/img/arm/Danny_Han2.png",
      "im"
    ),
    // new Person("Joey Gaffney", 'Electrical Lead', 'im', 'im', 'assets/img/arm/joey.png', 'im'),
    // new Person("Arwin Patrick"    , 'Arm Lead'   , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    // new Person("Jonas Chianu"     , 'Arm Member' , 'im' , 'im' , 'assets/img/arm/jonas.png'       , 'im'),
    // new Person("Hazel Chongoti"   , 'Arm Member' , 'im' , 'im' , 'assets/img/arm/hazel.png'       , 'im'),
    // new Person("David Kim", 'Mechanical Lead', 'im', 'im', 'assets/img/arm/david.png', 'im'),
    // new Person("Debby Lin"        , 'Arm Member' , 'im' , 'im' , 'assets/img/arm/debby.png'       , 'im'),
    // new Person("Cailin Ringstorm" , 'Arm Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    // new Person("Iris Xu"          , 'Arm Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    // new Person("Ryan Yeung"       , 'Arm Member' , 'im' , 'im' , 'assets/img/arm/ryan.png'        , 'im'),
    // new Person("Grace Zhang"      , 'Arm Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
  ];
  const Train: Array<Person> = [
    new Person(
      "James Na",
      "Electrical Co-Lead",
      "im",
      "im",
      "assets/img/train/James_Na2.png",
      "im"
    ),
    new Person(
      "Robin Yuan",
      "Electrical Co-Lead",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    // new Person("David Kim", 'Mechanical Lead', 'im', 'im', 'assets/img/arm/david.png', "im"),
    // new Person("Kuok Kun(AO) Chio" , 'RoboCup Lead'   , 'im' , 'im' , 'assets/img/train/kuok.png'      , 'im'),
    // new Person("Yang Su"           , 'RoboCup Lead'   , 'im' , 'im' , 'assets/img/train/yang.png'      , 'im'),
    // new Person("Kamran Alam"       , 'RoboCup Member' , 'im' , 'im' , 'assets/img/train/kamran.png'    , 'im'),
    // new Person("Wilson Chen"       , 'RoboCup Member' , 'im' , 'im' , 'assets/img/train/wilson.png'    , 'im'),
    // new Person("Vishal Desh"       , 'RoboCup Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    // new Person("Yoshi Inomata"     , 'RoboCup Member' , 'im' , 'im' , 'assets/img/train/yoshi.png'     , 'im'),
    // new Person("Eros Rojas"        , 'RoboCup Member' , 'im' , 'im' , 'assets/img/train/eros.png'      , 'im'),
    // new Person("Tian Hao Xu", 'Electrical Lead', 'im', 'im', 'assets/img/train/tian.png', 'im'),
  ];
  const Gripper: Array<Person> = [
    new Person(
      "Mohammed AJ",
      "Co-Lead",
      "im",
      "im",
      "assets/img/gripper/Mohammed_AJ.jpg",
      "im"
    ),
    new Person(
      "Ehsan Twal",
      "Co-Lead",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    // new Person("Abdulmajeed Amran", 'Gripper Lead', 'im', 'im', 'assets/img/default_profile.jpg', 'im'),
    // new Person("Matthew Sam"   , 'Gripper Lead'   , 'im' , 'im' , 'assets/img/gripper/matthew.png' , 'im'),
    // new Person("Husein Alatas" , 'Gripper Member' , 'im' , 'im' , 'assets/img/gripper/husein.png'  , 'im'),
    // new Person("Akhil Prabhu"  , 'Gripper Member' , 'im' , 'im' , 'assets/img/gripper/akhil.png'   , 'im'),
    // new Person("Chaewoon Song" , 'Gripper Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    // new Person("Jenica Sy"     , 'Gripper Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
  ];
  const Software: Array<Person> = [
    new Person(
      "Yousif El-Wishahy",
      "Co-Lead",
      "im",
      "im",
      "assets/img/default_profile.jpg",
      "im"
    ),
    new Person(
      "Andrew Xie",
      "Co-Lead",
      "im",
      "im",
      "assets/img/software/Andrew_Xie2.png",
      "im"
    ),

    // new Person("Francisco Farinha", 'Software Lead', 'im', 'im', 'assets/img/software/francisco.png', 'im'),
    // new Person("Andrew Xie", 'Software Lead', 'im', 'im', 'assets/img/software/andrew.png', 'im'),
    // new Person("Aayush Behl"       , 'Software Member' , 'im' , 'im' , 'assets/img/software/aayush.png'    , 'im'),
    // new Person("Ashli Forbes"      , 'Software Member' , 'im' , 'im' , 'assets/img/default_profile.jpg'    , 'im'),
    // new Person("Damien Fung"       , 'Software Member' , 'im' , 'im' , 'assets/img/software/damien.png'    , 'im'),
    // new Person("Tawsif Hasan"      , 'Software Member' , 'im' , 'im' , 'assets/img/software/tawsif.png'    , 'im'),
  ];

  return (
    <section className="bg-white w-screen overscroll-none mt-16 pt-10 z-10">
      <div className="container">
        <h1 className="text-4xl mx-[5%] font-extrabold font-Roboto700 mb-20 text-gray-800 capitalize lg:text-5xl">
          Meet The Team
        </h1>
        <div className="my-16 mx-[5%] mb-24">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">
            Leads
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
            PianoBot
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {PianoBot.map((lead) => (
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

        {/*<div className="my-16 mx-[5%]">*/}
        {/*  <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">*/}
        {/*    ArtBot (Completed)*/}
        {/*  </h1>*/}
        {/*  <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">*/}
        {/*    {ArtBot.map((lead) => (*/}
        {/*      <Member*/}
        {/*        name={lead.name}*/}
        {/*        position={lead.position}*/}
        {/*        linkedin={lead.linkedin}*/}
        {/*        github={lead.github}*/}
        {/*        img={lead.img}*/}
        {/*        email={lead.email}*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="my-16 mx-[5%]">
          <h1 className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl">
            RoboCup Arm
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Arm.map((lead) => (
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
            RoboCup Drivetrain
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Train.map((lead) => (
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
            RoboCup Gripper
          </h1>
          <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Gripper.map((lead) => (
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
        </div>
      </div>
    </section>
  );
};

export default Team;
