import React ,{useState} from "react";
import { datas } from "./Datas";
import { Link } from "react-router-dom";

const SidebarData = ({ toggle}) => {


  return (
    <div>
      <div className="">
        {datas.map((data) => {
          return (
            <Link
              to={data?.path}
              className={` flex items-center mt-2 p-3 cursor-pointer hover:bg-[#4A4BE4] hover:text-white rounded-xl rounded-l-none transition-all duration-300  left-4 bottom-4`}
              key={data.id}
            >
              <div className="mr-8 text[1.7rem] text-brown" style={{fontSize:"25px"}}>{data.icon}</div>
              <div
                className={`${
                  toggle ? "opacity-0 delay-200" : ""
                } text-[1rem] text-brown whitespace-pre`}
              >
                {data.text}
              </div>
            </Link>

          );
        })}
      </div>
    </div>
  );
};

export default SidebarData;
