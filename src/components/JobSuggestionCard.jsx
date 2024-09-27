import React from "react";
import NewBadge from "./badges/NewBadge";
import { IoLocationOutline } from "react-icons/io5";

const JobSuggestionCard = ({ data }) => {
  const {
    isNew = "",
    img = "",
    title = "",
    company = "",
    location = "",
    postedBy = "",
  } = data;
  return (
    <div onClick={()=>alert(data.id)} className="w-full h-[150px]flex flex-col items-start p-5 bg-white border-gray rounded-2xl relative cursor-pointer primary-shadow-hover">
      {isNew && (
        <div className="absolute top-2 right-2">
          <NewBadge />
        </div>
      )}
      <img
        src={img}
        alt=""
        className=" w-[60px] absolute top-10 right-10 h-[60px] rounded-lg border-gray job-card-img"
      />
      <h3 className="w-full text-[0.9rem] font-semibold text-ellipsis text-nowrap overflow-hidden mt-3 ">
        {title}
      </h3>
      <h2 className=" max-w-[90%] overflow-hidden text-ellipsis text-nowrap text-gray-600 font-roboto">
        {company}
      </h2>
      <div className="mt-2 flex justify-start items-center  gap-1">
        <IoLocationOutline />
        <span className=" font-extralight text-sm max-w-[70%] overflow-hidden text-ellipsis text-nowrap">
          {location}
        </span>
      </div>
      <h1 className="text-end text-sm mt-2 text-slate-400">{postedBy}</h1>
    </div>
  );
};

export default JobSuggestionCard;