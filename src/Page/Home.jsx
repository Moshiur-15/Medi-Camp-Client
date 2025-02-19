import React from "react";
import Banner from "../Components/Banner";
import PopulerCamp from "../Components/PopulerCamp";
import FAQSection from "../Components/FAQSection ";
import Newsletter from "../Components/Newsletter";
import Feedback from "../Components/Feedback";
import UpcomingMedicalCamps from "../Components/upcomingCamps";
import Services from "../Components/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-14 lg:my-16 container mx-auto">
        <PopulerCamp />
      </div>
      <div className="">
        <Feedback />
      </div>
      <div className="my-14 lg:my-16 container mx-auto">
        <FAQSection />
      </div>
      <div className="bg-gray-200/80">
        <UpcomingMedicalCamps />
      </div>

      <div className="container mx-auto my-14 lg:my-16">
        <Newsletter />
      </div>
      <div className="bg-gray-200/80">
        <Services />
      </div>
    </div>
  );
};

export default Home;
