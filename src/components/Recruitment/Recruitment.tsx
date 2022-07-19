import React from 'react'
import { useState } from 'react';
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai';


class Position{
  title:string;
  positions:number;
  team:string;
  description:string;

  constructor(title:string, positions:number,description:string,team:string){
    this.title = title;
    this.positions = positions;
    this.team = team;
    this.description = description;
  }
}

const Recruitment = () =>{
  const [arrow,setArrow] = useState(true);
  const positions:Array<Position> = [
    new Position("Full Stack Developer", 2, "yuh fajkd adjldsf afkjdsfs adfkjsfkasdjfa;slkfj ds f;sdkfj sd;kljf","Admin"),
    new Position("Software Engineer", 3, "Do something","RoboCup"),
    new Position("Mechanical Engineer" , 5, "YEHJDFA","PianoBot"),];

  const set = (visible:boolean) =>{
    return visible ? "hidden" : "visible";
  }

  return (
    <section className='flex flex-col m-[10%] py-10 md:mt-24 sm:mt-60 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg justify-center items-center'>
         <h1 className='text-3xl py-4 font-extrabold md:text-5xl text-gray-900'>Current Openings</h1>
         <h1 className='text-2xl py-2 font-light md:text-4xl text-gray-700'>Thank you for your interest!</h1>
         <p className='py-4 text-md md:text-xl  text-gray-500'>Our Fall Recruitment cycle is in full swing right now! If you're interested in joining, apply for a technical position here. Note that our applications are open to students across all faculties and of varying skill levels. We look forward to your applications!</p>
         {positions.map((position:Position) => (
          <div className='flex flex-col w-full py-4'>
             <div className='flex py-4 mt-4 flex-row justify-between text-center items-start font-bold rounded-lg bg-gray-200 text-gray-900 w-full'>
            <h1 className='mx-2'>{position.title}</h1>
            <button className='outline-none style-none border-none bg-gray-200' onClick={() => setArrow(!arrow)}>
             {arrow ? <AiOutlineDown className='mx-4 my-1 font-bold'/> : <AiOutlineUp className='mx-4 my-1 font-bold'/>}
            </button>
            </div>
            <div className={"w-full text-center flex flex-col justify-center items-center rounded-lg py-4 bg-white border-2 border-t-0 border-gray-200 mt-0 " + set(arrow)}>
              <p className='text-gray-900'>Available positions : {position.positions}</p>
              <p className='text-gray-900'>About the role : {position.description}</p>
            </div>
          </div>
       ))}
      <button className='bg-gray-900 w-auto rounded-lg mt-8 md:mt-16 px-20 py-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-600  text-gray-200 text-center'>Apply Now</button>
    </section>
  )
}


//onClick rounded-lg for bottom dissapears and rounded-lg for top of desc dissapears
export default Recruitment;