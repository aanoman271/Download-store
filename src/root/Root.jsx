import React from "react";
import Navbar from "../Components/Navbar";
import Fotter from "../Components/Fotter";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Root;
