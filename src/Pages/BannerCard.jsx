import React from "react";

const BannerCard = () => {
  return (
    <div className="py-7 py-20 bg-gradient-to-l from-[#632ee3] to-[#9f62f2] ">
      <h1 className="text-[45px] font-semibold text-center mb-3.5 text-white">
        Trusted by Millions Built for You
      </h1>
      <div className="md:flex-row flex flex-col justify-around ">
        <div className="flex flex-col p-4 justify-center items-center gap-3 border border-gray-400 shadow-sm">
          <p className="text-white">Total Downloads</p>
          <h1 className=" text-white font-extrabold text-6xl">29.6 M</h1>
          <p className="text-white">21% more than last month</p>
        </div>
        <div className="border border-gray-400 shadow-sm flex flex-col justify-center items-center gap-3 p-4">
          <p className="text-white">Total reviews</p>
          <h1 className=" text-white font-extrabold text-6xl">906 K</h1>
          <p className="text-white">46% more than last month</p>
        </div>
        <div className="border border-gray-400 p-4 shadow-sm flex flex-col justify-center items-center gap-3">
          <p className="text-white">Active App</p>
          <h1 className=" text-white font-extrabold text-6xl">106 +</h1>
          <p className="text-white">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
