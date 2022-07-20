import React from 'react'
import { useState } from 'react';
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai';


interface Props{
    name:string,
    positions:number,
    team:string,
    desc:string
}

const  Position = (props:Props) =>{
    const [arrow,setArrow] = useState(true);

    const set = (visible:boolean) =>{
        return visible ? "hidden" : "visible";
    }

    const removeBorder = (visible:boolean) => {
        return !visible ? "rounded-b-none" : " ";
    }

    const border2 = (visible: boolean) => {
        return !visible ? "rounded-t-none" : " ";
    }
  return (
    <div className='flex flex-col w-full py-4'>
             <div className={'flex py-4 mt-4 flex-row justify-between text-center items-start font-bold rounded-lg border-b-2 border-l-2 border-r-2 border-gray-200 bg-gray-200 text-gray-900 w-full ' + removeBorder(arrow)}>
            <h1 className='mx-2'>{props.name}</h1>
            <button className='outline-none style-none border-none bg-gray-200' onClick={() => setArrow(!arrow)}>
             {arrow ? <AiOutlineDown className='mx-4 my-1 font-bold'/> : <AiOutlineUp className='mx-4 my-1 font-bold'/>}
            </button>
            </div>
            <div className={"w-full text-center flex flex-col justify-start items-start rounded-lg py-4 bg-white border-2 border-gray-200 border-t-gray-200 mt-0 " + set(arrow) + " " + border2(arrow)}>
              <p className='text-gray-900 font-bold mb-4 px-4 py-4'>Number of positions : <span className="font-normal text-gray-900">{props.positions}</span></p>
              <p className='text-gray-900 font-bold px-4'>About the role : <span className="font-normal text-gray-900">{props.desc}</span></p>
            </div>
          </div>
  )
}

export default Position