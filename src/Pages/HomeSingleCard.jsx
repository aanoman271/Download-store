import React from "react";
import { IoMdDownload } from "react-icons/io";
import { CiStar } from "react-icons/ci";

const HomeSingleCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card bg-base-100 w-[90%] shadow-sm">
      <figure>
        <img
          className="w-full h-52 overflow-hidden object-cover"
          src={data.image}
        />
      </figure>
      <div className="px-2 my-1">
        <h2 className="card-title">{data.title}</h2>
        <div className="flex justify-between">
          <span className="flex gap-1 items-center bg-[#F1F5E8] text-[#00D390]">
            <IoMdDownload></IoMdDownload> {data.downloads}
          </span>
          <span className="flex gap-1 items-center bg-[#F1F5E8] text-[#00D390]">
            <CiStar></CiStar> {data.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeSingleCard;
