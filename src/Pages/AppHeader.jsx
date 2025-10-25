import React, { Suspense, useState } from "react";
import useAppDatas from "../Hook/useAppDatas";
import Lodder from "./Lodder";
import HomeSingleCard from "./HomeSingleCard";
import { Link } from "react-router";
const AppHeader = () => {
  const AppDatas = useAppDatas();
  const { appData, loding } = AppDatas;
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchData = term
    ? appData.filter((aData) =>
        aData.title.trim().toLocaleLowerCase().includes(term)
      )
    : appData || [];
  const [searchLOad, setSearchLOad] = useState(false);
  const oncng = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchLOad(true);
    setTimeout(() => {
      setSearchLOad(false);
    }, 300);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-9">
        <h1 className="text-[48px] font-bold text-center">
          Our All Applications
        </h1>
        <p className="text-[20px] text-[#627382] text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="mx-auto flex justify-between items-center max-w-7xl px-3 mb-3 ">
        <h4 className="font-semibold text-2xl">
          ({searchData.length}) Apps Found
        </h4>
        <input
          value={search}
          onChange={oncng}
          type="search"
          placeholder="Type here"
          className="input"
        />
      </div>

      {searchData.length === 0 && (
        <h1 className="text-4xl font-medium text-red-500 text-center">
          App Not Found
        </h1>
      )}
      {loding ? (
        <div className="flex justify-center items-center h-60">
          <Lodder></Lodder>
        </div>
      ) : searchLOad ? (
        <div className="flex justify-center items-center h-60">
          <Lodder></Lodder>
        </div>
      ) : (
        <div className="px-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3.5 justify-items-center">
          {searchData.map((data) => (
            <HomeSingleCard key={data.id} data={data}></HomeSingleCard>
          ))}
        </div>
      )}
    </div>
  );
};
export default AppHeader;
