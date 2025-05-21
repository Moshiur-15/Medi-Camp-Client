import React from "react";
import {
  FaStethoscope,
  FaHeartbeat,
  FaTooth,
  FaEye,
  FaPills,
  FaAmbulance,
} from "react-icons/fa";
const service = [
  {
    id: 1,
    title: "General Health Checkup",
    description:
      "Regular checkups to monitor overall health and diagnose conditions early.",
    icon: <FaStethoscope className="text-4xl text-blue-600" />,
  },
  {
    id: 2,
    title: "Cardiology Services",
    description:
      "Heart checkups, ECG, and expert consultations for cardiovascular health.",
    icon: <FaHeartbeat className="text-4xl text-red-500" />,
  },
  {
    id: 3,
    title: "Dental Care",
    description:
      "Free dental checkups, cleanings, and basic treatments for oral health.",
    icon: <FaTooth className="text-4xl text-yellow-500" />,
  },
  {
    id: 4,
    title: "Eye Care Services",
    description:
      "Comprehensive eye exams, free glasses, and cataract screenings.",
    icon: <FaEye className="text-4xl text-green-500" />,
  },
  {
    id: 5,
    title: "Free Medicines",
    description: "Essential medicines for common ailments provided at no cost.",
    icon: <FaPills className="text-4xl text-purple-500" />,
  },
  {
    id: 6,
    title: "Emergency Ambulance",
    description: "24/7 emergency ambulance services for critical patients.",
    icon: <FaAmbulance className="text-4xl text-orange-500" />,
  },
];

const Services = () => {
  return (
    <section className="container mx-auto">
      <div className="mx-2 xl:mx-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#27477D]">
          Services We Provide
        </h2>
        <p className="mb-6 text-center text-lg md:text-2xl italic">
          Our medical camps offer a wide range of healthcare services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.map((service) => (
            <div
              key={service.id}
              className="hover:shadow-md p-6 bg-white flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
              <p className="mt-2 text-gray-600 mx-5">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
