import React from 'react'
import Member from './Member';



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

  const PianoBot:Array<Person> = [
    new Person("Shawna Naderi"        , 'PianoBot Lead'   , 'im' , 'im' , "assets/img/pianobot/shawna.png"   ,'im'),
    new Person("Veronica Nguyen"      , 'PianoBot Lead'   , 'im' , 'im' , "assets/img/pianobot/veronica.png" ,'im'),
    new Person("Evan Liu"             , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/evan.png"     ,'im'),
    new Person("Fernando Ng"          , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/fernando.png" ,'im'),
    new Person("Karthik Ravichandran" , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/karthik.png"  ,'im'),
    new Person("Prayus Shrestha"      , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/prayus.png"   ,'im'),
    new Person("Ryan Acapulco"        , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/ryan.png"     ,'im'),
    new Person("Scott Beaulieu"       , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/scott.png"    ,'im'),
    new Person("Yiting Wu"            , 'PianoBot Member' , 'im' , 'im' , "assets/img/pianobot/yiting.png"   ,'im'),
  ];


  return (
    <section className="bg-white w-screen overscroll-none mt-16 pt-10 z-10">
      <div className="container">
         

          <div className='my-16 mx-[5%]'>
            <h1  className="text-3xl font-lighter md:font-bold text-gray-800 capitalize -mb-4 lg:text-4xl text-center">The PianoBot Team</h1>
            <div className="grid grid-cols-1 mt-12 gap-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                {PianoBot.map((lead) => (
                   <Member name={lead.name} position={lead.position} linkedin={lead.linkedin} github={lead.github} img={lead.img} email={lead.email}/>
                ))}
          </div>
          </div>

          
      </div>
</section>
  )
}

export default Team
