import React from "react";
import Banner from "../Components/Banner";
import PopulerCamp from "../Components/PopulerCamp";
import FAQSection from "../Components/FAQSection ";
import Newsletter from "../Components/Newsletter";
import Feedback from "../Components/Feedback";
import UpcomingMedicalCamps from "../Components/upcomingCamps";
import Services from "../Components/Services";
import OurTeam from "../Components/OurTeam";

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

      <div className="">
        <UpcomingMedicalCamps />
      </div>

      <div className="my-14 lg:my-16">
        <Services />
      </div>

      {/* <div className="container mx-auto">
        <OurTeam/>
      </div> */}

      <div className="container mx-auto my-14 lg:my-16">
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
