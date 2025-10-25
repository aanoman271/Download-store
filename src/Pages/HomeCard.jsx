import React from "react";
import useAppDatas from "../Hook/useAppDatas";
import HomeSingleCard from "./HomeSingleCard";
import Lodder from "./Lodder";
import { Link } from "react-router";
import ErrorPAge from "./ErrorPAge";
const HomeCard = () => {
  const data = useAppDatas();
  const { appData, loding, error } = data;
  const sliceData = appData.slice(0, 8);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-9">
        <h1 className="text-[48px] font-bold text-center">Trending Apps</h1>
        <p className="text-[20px] text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {error ? (
        <ErrorPAge></ErrorPAge>
      ) : loding ? (
        <div className="flex justify-center items-center h-60">
          <Lodder></Lodder>
        </div>
      ) : (
        <div className="px-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3.5 justify-items-center">
          {sliceData.map((data) => (
            <HomeSingleCard key={data.id} data={data}></HomeSingleCard>
          ))}
        </div>
      )}
      <div className=" flex justify-center my-5">
        <Link to="/apps">
          <button className=" text-white btn bg-gradient-to-l from-[#632ee3] to-[#9f62f2]">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
