import React, { useEffect, useState } from "react";
import { getApp } from "../utility/Utility";
import useAppDatas from "../Hook/useAppDatas";
import InstaledApp from "./InstaledApp";
import Lodder from "./Lodder";
import ErrorPAge from "./ErrorPAge";

const Instalation = () => {
  const InstalledId = getApp();
  const [unstalls, setunstall] = useState(InstalledId);

  const { appData, loding, error } = useAppDatas(InstalledId);

  // const findDAta = appData.filter((a) => unstalls.includes(a.id));
  const [sort, setSort] = useState([]);
  useEffect(() => {
    const filtered = appData.filter((a) => unstalls.includes(a.id));
    setSort(filtered);
  }, [appData, unstalls]);
  const HighTolow = () => {
    const hToL = [...sort].sort((a, b) => b.downloads - a.downloads);
    setSort(hToL);
  };
  const lowToHigh = () => {
    const lToh = [...sort].sort((a, b) => a.downloads - b.downloads);
    setSort(lToh);
  };
  return (
    <>
      {error ? (
        <ErrorPAge></ErrorPAge>
      ) : loding ? (
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
            <div className="flex justify-end">
              {" "}
              <div className="dropdown dropdown-bottom dropdown-end ">
                <div tabIndex={0} role="button" className="btn m-1">
                  Click ⬇️
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li onClick={HighTolow}>
                    <span className="btn">high to low</span>
                  </li>
                  <li>
                    <span onClick={lowToHigh} className="btn">
                      low to high
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {sort.length === 0 ? (
              <h1 className="text-4xl font-medium text-red-500 text-center">
                Installed app not found
              </h1>
            ) : (
              sort.map((iData) => (
                <InstaledApp
                  key={iData.id}
                  setunstall={setunstall}
                  iData={iData}
                ></InstaledApp>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Instalation;
