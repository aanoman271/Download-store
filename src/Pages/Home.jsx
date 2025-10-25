import React from "react";
import HomeBanner from "./HomeBanner";
import BnnerImage from "./BnnerImage";
import BannerCard from "./BannerCard";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <div className="h-screen">
      <HomeBanner></HomeBanner>
      <BnnerImage></BnnerImage>
      <BannerCard></BannerCard>
      <HomeCard></HomeCard>
    </div>
  );
};

export default Home;
