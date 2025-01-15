import React from "react";
import CampCard from "../Components/CampCard";

import banner2 from "../assets/banner-2.jpg";

const AvailableCamp = () => {
  const campsData = [
    {
      name: "Camp 1",
      imgSrc: `${banner2}`,
      location: "Patuakhali",
      fees: 100,
      date: "10/10/2025",
      time: "10:10",
      participantCount: 200,
      healthcareProfessional: "Dr. John Doe",
      Description:
        "sdaglsdgh asdnklhg ddgsdgh sdfgsfsdfsdg fsdgs gf jdlfjg dsh gds fsdkf hsd gsd f sdhk fshd fhsd",
    },
    {
      name: "Camp 2",
      imgSrc: `${banner2}`,
      location: "Dhaka",
      fees: 150,
      date: "12/12/2025",
      time: "14:00",
      participantCount: 250,
      healthcareProfessional: "Dr. Jane Smith",
      Description:
        "sdaglsdgh asdnklhg ddgsdgh sdfgsfsdfsdg fsdgs gf askhfsdf sdiassdkggds hsad fchsd g",
    },
    {
      name: "Camp 2",
      imgSrc: `${banner2}`,
      location: "Dhaka",
      fees: 150,
      date: "12/12/2025",
      time: "14:00",
      participantCount: 250,
      healthcareProfessional: "Dr. Jane Smith",
      Description:
        "sdaglsdgh asdnklhg ddgsdgh sdfgsfsdfsdg fsdgs gf askhfsdf sdiassdkggds hsad fchsd g",
    },
    {
      name: "Camp 2",
      imgSrc: `${banner2}`,
      location: "Dhaka",
      fees: 150,
      date: "12/12/2025",
      time: "14:00",
      participantCount: 250,
      healthcareProfessional: "Dr. Jane Smith",
      Description:
        "sdaglsdgh asdnklhg ddgsdgh sdfgsfsdfsdg fsdgs gf askhfsdf sdiassdkggds hsad fchsd g",
    },
    {
      name: "Camp 2",
      imgSrc: `${banner2}`,
      location: "Dhaka",
      fees: 150,
      date: "12/12/2025",
      time: "14:00",
      participantCount: 250,
      healthcareProfessional: "Dr. Jane Smith",
      Description:
        "sdaglsdgh asdnklhg ddgsdgh sdfgsfsdfsdg fsdgs gf askhfsdf sdiassdkggds hsad fchsd g",
    },
    {
      name: "Camp 2",
      imgSrc: `${banner2}`,
      location: "Dhaka",
      fees: 150,
      date: "12/12/2025",
      time: "14:00",
      participantCount: 250,
      healthcareProfessional: "Dr. Jane Smith",
      Description:
        "sdaglsdgh asdnklhg ddgsdgh sdfgsfsdfsdg fsdgs gf askhfsdf sdiassdkggds hsad fchsd g",
    },
    {
      name: "Camp 2",
      imgSrc: `${banner2}`,
      location: "Dhaka",
      fees: 150,
      date: "12/12/2025",
      time: "14:00",
      participantCount: 250,
      healthcareProfessional: "Dr. Jane Smith",
      Description:
        "sdaglsdgh asdnklhg ddgsdgh sdfgsfsdfsdg fsdgs gf askhfsdf sdiassdkggds hsad fchsd g",
    },
  ];
  return (
    <section className="container mx-auto">
      <div className="my-10 lg:my-16 xl:my-20 mx-0 xl:mx-16">
        <h2 className="text-3xl font-bold font-merriweather text-center">
          Explore Available Camps
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto text-center">
          Find your perfect camp for adventure, learning, and fun. Explore
          options, dates, and activities to plan your next experience
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-6  lg:px-10 xl:px-0 ">
          {campsData?.map((camp, inx) => (
            <CampCard camp={camp} key={inx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableCamp;
