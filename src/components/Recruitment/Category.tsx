import React from "react";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Position from "./Position";

interface Props {
  name: string;
  positions: Array<Object>;
}

const Category = (props: Props) => {
  const [arrow, setArrow] = useState(true);

  const set = (visible: boolean) => {
    return visible ? "hidden" : "visible";
  };

  const removeBorder = (visible: boolean) => {
    return !visible ? "rounded-b-none" : " ";
  };

  const border2 = (visible: boolean) => {
    return !visible ? "rounded-t-none" : " ";
  };
  return (
    <div className="flex flex-col w-full py-4">
      <div
        className={
          "flex py-4 mt-4 flex-row cursor-pointer justify-between text-center items-start font-bold rounded-lg border-b-2 border-l-2 border-r-2 border-gray-200 bg-gray-200 text-gray-900 w-full " +
          removeBorder(arrow)
        }
        onClick={() => setArrow(!arrow)}
      >
        <h1 className="mx-2 text-md">{props.name} {" "}</h1>
        <button className="outline-none style-none border-none bg-gray-200">
          {arrow ? (
            <AiOutlineDown className="mx-4 my-1 font-bold" />
          ) : (
            <AiOutlineUp className="mx-4 my-1 font-bold" />
          )}
        </button>
      </div>
      <div
        className={
          "w-full text-start flex flex-col justify-start items-start rounded-lg py-4 bg-white border-2 border-gray-200 border-t-gray-200 mt-0 " +
          set(arrow) +
          " " +
          border2(arrow)
        }
      >
        {props.positions.map((position: any) => (
        <Position
          name={position.title}
          positions={position.positions}
          team={position.team}
          desc={position.description}
          qualifications={position.qualifications}
          responsibilites={position.responsibilities}
          pref = {position.pref}
        />
      ))}
      </div>
    </div>
  );
};

export default Category;
