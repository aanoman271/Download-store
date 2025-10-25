import React, { useState } from "react";
import { getApp } from "../utility/Utility";
import useAppDatas from "../Hook/useAppDatas";
import InstaledApp from "./InstaledApp";
import Lodder from "./Lodder";

const Instalation = () => {
  const InstalledId = getApp();

  const [unstalls, setunstall] = useState(InstalledId);

  const { appData, loding, error } = useAppDatas(InstalledId);

  const findDAta = appData.filter((a) => unstalls.includes(a.id));

  return (
    <>
      {loding ? (
        <Lodder></Lodder>
      ) : (
        <div>
          <div className="max-w-7xl mx-auto">
            <div className="py-9">
              <h1 className="text-[48px] font-bold text-center">
                Your Installed Apps
              </h1>
              <p className="text-[20px] text-[#627382] text-center">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>
            {findDAta.map((iData) => (
              <InstaledApp
                key={iData.id}
                setunstall={setunstall}
                iData={iData}
              ></InstaledApp>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Instalation;
