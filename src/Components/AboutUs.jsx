import React from "react";
// import aboutImg from "../../assets/about-us.jpg"; // Add your image in assets folder
import { FaUsers, FaBullseye, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-16 px-2 md:px-20 container mx-auto">
      {/* Top Banner Image */}
      <div className="relative w-full h-72 lg:h-96">
        <img
          src="https://i.ibb.co.com/svQBXhHn/images.jpg"
          alt="About Us"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              About Us
            </h2>
            <p className="text-gray-200 max-w-3xl mx-auto text-lg mt-2">
              Welcome to
              <span className="font-bold text-blue-500">Medi Camp (MCMS)</span>{" "}
              – your one-stop solution for managing medical camps efficiently.
              We help organizers and participants with seamless scheduling, easy
              registrations, and real-time updates.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center mt-12">
        {/* Mission, Vision, Who We Are */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Who We Are */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaUsers className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-600">Who We Are</h3>
            <p className="text-gray-600 mt-2">
              A passionate team dedicated to transforming healthcare with
              efficient camp management solutions.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaBullseye className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-600">Our Mission</h3>
            <p className="text-gray-600 mt-2">
              Simplifying medical camp management with modern technology to
              ensure accessibility and smooth operations.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <FaLightbulb className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-600">Our Vision</h3>
            <p className="text-gray-600 mt-2">
              Revolutionizing healthcare with efficient, technology-driven
              medical camp management for a healthier world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
