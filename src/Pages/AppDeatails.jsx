import React from "react";
import useAppDatas from "../Hook/useAppDatas";
import { useParams } from "react-router";
import SelectAppCard from "./SelectAppCard";
import Rechart from "./Rechart";
import DetailDescribetion from "./DetailDescribetion";

const AppDeatails = () => {
  const { id } = useParams();
  const { appData } = useAppDatas();
  const selectedApp = appData.find((p) => p.id === parseInt(id));
  return (
    <div className="max-w-7xl mx-auto md:px-2 lg:p-0">
      <SelectAppCard selectedApp={selectedApp}></SelectAppCard>
      <Rechart selectedApp={selectedApp}></Rechart>
      <DetailDescribetion selectedApp={selectedApp}></DetailDescribetion>
    </div>
  );
};

export default AppDeatails;
