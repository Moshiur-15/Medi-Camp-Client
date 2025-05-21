import React from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Importing the calendar icon
import { FaLocationDot } from "react-icons/fa6";
const upcomingCamps = [
  {
    id: 1,
    title: "Free Eye Checkup Camp",
    date: "March 10, 2025",
    location: "Dhaka Medical College, Dhaka",
    description:
      "Comprehensive eye checkup and free glasses for patients in need.",
    image: "https://i.ibb.co.com/HDD6zXqB/Routine-Eye-Checkup1.webp", // Replace with your image
  },
  {
    id: 2,
    title: "General Health Screening",
    date: "March 15, 2025",
    location: "Chittagong General Hospital",
    description:
      "Blood pressure, diabetes, and overall health checkup services.",
    image: "https://i.ibb.co.com/1YQJwg9X/longevity-clinic.webp", // Replace with your image
  },
  {
    id: 3,
    title: "Dental Care Camp",
    date: "March 20, 2025",
    location: "Rajshahi City Health Center",
    description: "Free dental checkups, consultation, and basic treatment.",
    image:
      "https://i.ibb.co.com/ycsxyycZ/Dentist-visit-during-COVID-19-1-1080x675.jpg", // Replace with your image
  },
];

const UpcomingMedicalCamps = () => {
  return (
    <section className="bg-blue-100 py-10">
      <section className="container mx-auto">
        <div className="mx-2 xl:mx-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#27477D]">
            Upcoming Medical Camps
          </h2>
          <p className="mb-6 text-center text-lg md:text-2xl italic">
            Discover the upcoming camps for Community Wellness
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcomingCamps.map((camp) => (
              <div
                key={camp.id}
                className="hover:shadow-md bg-white overflow-hidden relative"
              >
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="w-full h-48 object-cover bg-gray-400"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-100 my-2 absolute top-[150px] bg-blue-500 pt-2 pb-1.5 px-3 left-0">
                    <FaCalendarAlt className="inline mr-2 text-white mb-1" />
                    {camp.date}
                  </p>
                  <h3 className="text-xl font-semibold">{camp.title}</h3>
                  <p className="text-gray-700">{camp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default UpcomingMedicalCamps;
