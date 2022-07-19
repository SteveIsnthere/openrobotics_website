import React from 'react'


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
  const positions:Array<Position> = [
    new Position("Full Stack Developer", 2, "yuh","Admin"),
    new Position("Software Engineer", 3, "Do something","RoboCup"),
    new Position("Mechanical Engineer" , 5, "YEHJDFA","PianoBot"),];

  return (
    <>
       {positions.map((position:Position) => (
         <div className='flex flex-row my-4 mt-20 w-screen'>
           <h1 className='text-gray-900'>{position.title}</h1>
           <h1 className='text-gray-900'>{position.positions}</h1>
           <h1 className="text-gray-900">{position.team}</h1>
           <h1 className='text-gray-900'>{position.description}</h1>
         </div>
       ))}
    </>
  )
}

export default Recruitment