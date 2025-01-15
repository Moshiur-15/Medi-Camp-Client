import { Button } from "flowbite-react";
import banner2 from "../assets/banner-2.jpg";
import CampCard from "./CampCard";

const PopulerCamp = () => {
  const campsData = [
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
    <section className="mx-0 xl:mx-16">
      <h2 className="text-3xl font-bold font-merriweather text-center">
        Popular Medical Camps
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto text-center">
        Explore the most popular medical camps with the highest number of
        participants. Join now to secure your spot!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-6  lg:px-10 xl:px-0">
        {campsData?.map((camp, inx) => (
          <CampCard camp={camp} key={inx} />
        ))}
      </div>

      <Button color="" className="bg-blue-500 hover:bg-blue-600 text-white px-4 mx-auto mt-10 lg:mt-16">
        View All Medical Camps
      </Button>
    </section>
  );
};

export default PopulerCamp;
