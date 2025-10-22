import React from "react";
import useAppDatas from "../Hook/useAppDatas";
import HomeSingleCard from "./HomeSingleCard";
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
      <div>
        {sliceData.map((data) => (
          <HomeSingleCard data={data}></HomeSingleCard>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
