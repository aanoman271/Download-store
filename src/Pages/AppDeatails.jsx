import React from "react";
import useAppDatas from "../Hook/useAppDatas";
import { useParams } from "react-router";
import SelectAppCard from "./SelectAppCard";
import Rechart from "./Rechart";

const AppDeatails = () => {
  const { id } = useParams();
  const { appData } = useAppDatas();
  const selectedApp = appData.find((p) => p.id === parseInt(id));
  return (
    <div className="max-w-7xl mx-auto">
      <SelectAppCard selectedApp={selectedApp}></SelectAppCard>
      <Rechart selectedApp={selectedApp}></Rechart>
    </div>
  );
};

export default AppDeatails;
