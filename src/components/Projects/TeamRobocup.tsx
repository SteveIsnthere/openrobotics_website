import React from 'react'
import Member from '../Team/Member';



const Team = () => {
  class Person{
    name:string;
    position:string;
    linkedin:string;
    github:string;
    email: string;
    img:string;

    constructor(name:string,position:string,linkedin:string,github:string,img:string,email:string){
      this.name = name;
      this.position = position;
      this.linkedin = linkedin;
      this.github = github;
      this.email = email;
      this.img = img;
    }
  }

 
  const Arm:Array<Person> = [
    new Person("Joey Gaffney"     , 'Arm Lead'   , 'im' , 'im' , 'assets/img/arm/joey.png'        , 'im'),
    new Person("Arwin Patrick"    , 'Arm Lead'   , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    new Person("Jonas Chianu"     , 'Arm Member' , 'im' , 'im' , 'assets/img/arm/jonas.png'       , 'im'),
    new Person("Hazel Chongoti"   , 'Arm Member' , 'im' , 'im' , 'assets/img/arm/hazel.png'       , 'im'),
    new Person("David Kim"        , 'Arm Member' , 'im' , 'im' , 'assets/img/arm/david.png'       , 'im'),
    new Person("Debby Lin"        , 'Arm Member' , 'im' , 'im' , 'assets/img/arm/debby.png'       , 'im'),
    new Person("Cailin Ringstorm" , 'Arm Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    new Person("Iris Xu"          , 'Arm Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    new Person("Ryan Yeung"       , 'Arm Member' , 'im' , 'im' , 'assets/img/arm/ryan.png'        , 'im'),
    new Person("Grace Zhang"      , 'Arm Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
  ];
  const Train:Array<Person> = [
    new Person("Kuok Kun(AO) Chio" , 'RoboCup Lead'   , 'im' , 'im' , 'assets/img/train/kuok.png'      , 'im'),
    new Person("Yang Su"           , 'RoboCup Lead'   , 'im' , 'im' , 'assets/img/train/yang.png'      , 'im'),
    new Person("Kamran Alam"       , 'RoboCup Member' , 'im' , 'im' , 'assets/img/train/kamran.png'    , 'im'),
    new Person("Wilson Chen"       , 'RoboCup Member' , 'im' , 'im' , 'assets/img/train/wilson.png'    , 'im'),
    new Person("Vishal Desh"       , 'RoboCup Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    new Person("Yoshi Inomata"     , 'RoboCup Member' , 'im' , 'im' , 'assets/img/train/yoshi.png'     , 'im'),
    new Person("Eros Rojas"        , 'RoboCup Member' , 'im' , 'im' , 'assets/img/train/eros.png'      , 'im'),
    new Person("Tian Hao Xu"       , 'RoboCup Member' , 'im' , 'im' , 'assets/img/train/tian.png'      , 'im'),
  ];
  const Gripper:Array<Person> = [
    new Person("Matthew Sam"   , 'Gripper Lead'   , 'im' , 'im' , 'assets/img/gripper/matthew.png' , 'im'),
    new Person("Husein Alatas" , 'Gripper Member' , 'im' , 'im' , 'assets/img/gripper/husein.png'  , 'im'),
    new Person("Akhil Prabhu"  , 'Gripper Member' , 'im' , 'im' , 'assets/img/gripper/akhil.png'   , 'im'),
    new Person("Chaewoon Song" , 'Gripper Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
    new Person("Jenica Sy"     , 'Gripper Member' , 'im' , 'im' , 'assets/img/default_profile.jpg' , 'im'),
  ];
  const Software:Array<Person> = [
    new Person("Francisco Farinha" , 'Software Lead'   , 'im' , 'im' , 'assets/img/software/francisco.png' , 'im'),
    new Person("Andrew Xie"        , 'Software Lead'   , 'im' , 'im' , 'assets/img/software/andrew.png'    , 'im'),
    new Person("Aayush Behl"       , 'Software Member' , 'im' , 'im' , 'assets/img/software/aayush.png'    , 'im'),
    new Person("Ashli Forbes"      , 'Software Member' , 'im' , 'im' , 'assets/img/default_profile.jpg'    , 'im'),
    new Person("Damien Fung"       , 'Software Member' , 'im' , 'im' , 'assets/img/software/damien.png'    , 'im'),
    new Person("Tawsif Hasan"      , 'Software Member' , 'im' , 'im' , 'assets/img/software/tawsif.png'    , 'im'),
  ];


  return (
    <section className="bg-white w-screen overscroll-none mt-16 pt-10 z-10">
      <div className="container">
         
          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl text-center">RoboCup Arm Team</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Arm.map((lead) => (
                   <Member name={lead.name} position={lead.position} linkedin={lead.linkedin} github={lead.github} img={lead.img} email={lead.email}/>
                ))}
          </div>
          </div>

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl text-center">RoboCup Train Team</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Train.map((lead) => (
                   <Member name={lead.name} position={lead.position} linkedin={lead.linkedin} github={lead.github} img={lead.img} email={lead.email}/>
                ))}
          </div>
          </div>

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl text-center">RoboCup Gripper Team</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Gripper.map((lead) => (
                   <Member name={lead.name} position={lead.position} linkedin={lead.linkedin} github={lead.github} img={lead.img} email={lead.email}/>
                ))}
          </div>
          </div>

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl text-center">RoboCup Software Team</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {Software.map((lead) => (
                   <Member name={lead.name} position={lead.position} linkedin={lead.linkedin} github={lead.github} img={lead.img} email={lead.email}/>
                ))}
          </div>
          </div>
      </div>
</section>
  )
}

export default Team
