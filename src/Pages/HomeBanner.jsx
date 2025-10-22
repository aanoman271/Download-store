import React from "react";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const HomeBanner = () => {
  return (
    <div className="py-7">
      <h2 className="text-[72px] text-center text-[#001931] font-medium">
        We Build <br /> <span className="gradiant">Productive</span> Apps
      </h2>
      <p className="my-4 text-[#627382] text-[20px] text-center">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-2.5">
        <a
          href="https://play.google.com/store/games?device=windows"
          target="blank"
          className="bg-white btn font-semibold text-[20px] px-4 py-3"
        >
          <IoLogoGooglePlaystore />
          PlayStore
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="blank"
          className="bg-white btn font-semibold text-[20px] text-[20px] px-4 py-3"
        >
          <FaAppStore />
          AppStore
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;
