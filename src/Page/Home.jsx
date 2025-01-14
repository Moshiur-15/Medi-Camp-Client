import React from "react";
import Banner from "../Components/Banner";
import PopulerCamp from "../Components/PopulerCamp";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-14 lg:my-24 container mx-auto">
        <PopulerCamp />
      </div>
    </div>
  );
};

export default Home;