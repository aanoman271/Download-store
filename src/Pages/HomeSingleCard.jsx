import React from "react";
import { IoMdDownload } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const HomeSingleCard = ({ data }) => {
  return (
    <Link to={`/appdeatails/${data.id}`}>
      <div className="card bg-base-100 w-[90%] shadow-sm">
        <figure>
          <img
            className="w-full h-52 overflow-hidden object-cover"
            src={data?.image}
          />
        </figure>
        <div className="px-2 my-1">
          <h2 className="card-title">{data?.title}</h2>
          <div className="flex justify-between">
            <span className="flex gap-1 items-center px-2 rounded-s-sm bg-[#F1F5E8] text-[#00D390]">
              <IoMdDownload></IoMdDownload> {data?.downloads}
            </span>
            <span className="bg-[#FFF0E1] text-[#FF8811] rounded-s-sm px-2 flex gap-1 items-center bg-[#F1F5E8] text-[#00D390]">
              <CiStar></CiStar> {data?.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeSingleCard;
