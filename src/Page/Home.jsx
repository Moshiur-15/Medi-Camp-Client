import React from "react";
import Banner from "../Components/Banner";
import PopulerCamp from "../Components/PopulerCamp";
import FAQSection from "../Components/FAQSection ";
import Newsletter from "../Components/Newsletter";
import Feedback from "../Components/Feedback";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-14 lg:my-16 container mx-auto">
        <PopulerCamp />
      </div>
      <div>
        <Feedback/>
      </div>
      <div>
        <FAQSection />
      </div>
      <div className="my-14 lg:my-16 container mx-auto">
        <Newsletter/>
      </div>
    </div>
  );
};

export default Home;
