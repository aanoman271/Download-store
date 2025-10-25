import { FaDownload } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { getApp, setApp } from "../utility/Utility";
import { useEffect, useState } from "react";
import Lodder from "./Lodder";
const SelectAppCard = ({ selectedApp }) => {
  const [lodding, setLodding] = useState(false);
  const [Installed, setInstalled] = useState(false);
  const [pageLoding, setPAgeLoding] = useState(true);

  useEffect(() => {
    setPAgeLoding(true);
    setTimeout(() => {
      setPAgeLoding(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const localData = getApp();
    if (selectedApp && localData.includes(selectedApp.id)) {
      setInstalled(true);
    }
  }, [selectedApp]);
  const instalHandle = (id) => {
    setLodding(true);
    setTimeout(() => {
      setApp(id);
      setInstalled(true);
      setLodding(false);
    }, 1000);
  };
  const localSdata = getApp();
  if (pageLoding) {
    return <Lodder></Lodder>;
  }

  return (
    <div>
      {lodding ? (
        <Lodder></Lodder>
      ) : (
        <div className="flex gap-24 py-9 border-b border-gray-400 shadow-2xs">
          <div className="bg-white shadow-2xl border border-amber-400">
            <img src={selectedApp?.image} alt="" />
          </div>
          <div>
            <h2 className="font-bold text-3xl text-[#001931] ">
              {selectedApp?.title}
            </h2>
            <p className="text-xl text-[#627382] ">
              Developed by
              <span className="gradiant">{selectedApp?.companyName}</span>
            </p>
            <div className="flex gap-4 my-4">
              <div className="flex-col justify-center flex items-center">
                <FaDownload className="w-10 text-green-500" />
                <h1 className="font-extrabold text-[#001931] text-[40px]">
                  {selectedApp?.downloads}
                </h1>
              </div>
              <div className="flex-col justify-center flex items-center">
                <IoStar className="text-[#FF8811] w-10 " />

                <h1 className="font-extrabold text-[#001931] text-[40px]">
                  {selectedApp?.ratingAvg}
                </h1>
              </div>
              <div className="flex-col justify-center flex items-center  ">
                <AiFillLike className="text-blue-500 w-10" />
                <h1 className="font-extrabold text-[#001931] text-[40px]">
                  {selectedApp?.reviews}
                </h1>
              </div>
            </div>
            <button
              onClick={() => instalHandle(selectedApp?.id)}
              disabled={Installed}
              className="btn btn-primary bg-[#00d390]"
            >
              {localSdata.includes(selectedApp?.id)
                ? "Installed"
                : `  Install (${selectedApp?.size}) Mb`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectAppCard;
