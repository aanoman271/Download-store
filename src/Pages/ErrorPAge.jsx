import React from "react";
import err from "../assets/error-404.png";
const ErrorPAge = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src={err} alt="" />
      <h1 className="font-medium text-3xl ">page not found</h1>
    </div>
  );
};

export default ErrorPAge;
