import React from "react";

const upcomingCamps = [
  {
    id: 1,
    title: "Free Eye Checkup Camp",
    date: "March 10, 2025",
    location: "Dhaka Medical College, Dhaka",
    description:
      "Comprehensive eye checkup and free glasses for patients in need.",
    image: "https://source.unsplash.com/400x250/?eye,doctor", // Replace with your image
  },
  {
    id: 2,
    title: "General Health Screening",
    date: "March 15, 2025",
    location: "Chittagong General Hospital",
    description:
      "Blood pressure, diabetes, and overall health checkup services.",
    image: "https://source.unsplash.com/400x250/?hospital,checkup", // Replace with your image
  },
  {
    id: 3,
    title: "Dental Care Camp",
    date: "March 20, 2025",
    location: "Rajshahi City Health Center",
    description: "Free dental checkups, consultation, and basic treatment.",
    image: "https://source.unsplash.com/400x250/?dental,clinic", // Replace with your image
  },
];

const UpcomingMedicalCamps = () => {
  return (
    <section className="container mx-auto">
      <div className="mx-2 xl:mx-36">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#27477D]">
          Upcoming Medical Camps
        </h2>
        <p className="mb-6 text-center text-lg md:text-xl">
          Discover the upcoming camps for Community Wellness
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {upcomingCamps.map((camp) => (
            <div
              key={camp.id}
              className="rounded-xl shadow-md bg-white overflow-hidden"
            >
              <img
                src={camp.image}
                alt=""
                className="w-full h-48 object-cover bg-gray-400"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{camp.title}</h3>
                <p className="text-sm text-gray-600 my-2">{camp.date}</p>
                <p className="text-sm text-gray-600">{camp.location}</p>
                <p className="mt-2 text-gray-700">{camp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingMedicalCamps;
