import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Ayesha Rahman",
    role: "Chief Medical Officer",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    facebook: "#",
    linkedin: "#",
    email: "#",
  },
  {
    id: 2,
    name: "Dr. Hasan Ali",
    role: "Cardiologist",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    facebook: "#",
    linkedin: "#",
    email: "#",
  },
  {
    id: 3,
    name: "Nurse Maria Khan",
    role: "Head Nurse",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    facebook: "#",
    linkedin: "#",
    email: "#",
  },
  {
    id: 4,
    name: "John Doe",
    role: "Volunteer Coordinator",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
    facebook: "#",
    linkedin: "#",
    email: "#",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-gray-100 mx-2 xl:mx-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#27477D]">Our Team & Volunteers</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg text-center md:text-2xl italic">
          Meet our dedicated team working tirelessly to provide the best medical support.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white overflow-hidden p-6 text-center group hover:shadow-xl transition-all"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-blue-400"
              />
              <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;