import React from "react";
import hero from "../assets/hero.png";
const BnnerImage = () => {
  return (
    <div className="flex justify-center">
      <img
        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-auto"
        src={hero}
        alt=""
      />
    </div>
  );
};

export default BnnerImage;
