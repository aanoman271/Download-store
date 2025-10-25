import React from "react";
import Navbar from "../Components/Navbar";
import Fotter from "../Components/Fotter";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>

      <Navbar></Navbar>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Root;
