import React from "react";
import { Button } from "flowbite-react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AvailableCampCard = ({ camp, layout }) => {
  const {
    image,
    campName,
    participantCount,
    location,
    healthcareProfessional,
    fees,
    _id,
    time,
    date,
    description,
  } = camp || {};

  return (
    <div
      className={`border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden h-full flex flex-col ${
        layout ? "xl:flex-row" : ""
      }`}
    >
      <div className={`${layout ? "xl:w-2/3" : "w-full"}`}>
        <img
          className={` object-cover ${
            layout ? "w-full h-[230px] xl:h-full" : "w-full h-[230px]"
          }`}
          src={image}
          alt={campName}
        />
      </div>

      <div
        className={`p-6 flex flex-col justify-between h-full ${
          layout ? "xl:w-2/3" : ""
        }`}
      >
        <div className="flex-grow">
          <p className="flex items-center gap-2 text-gray-700 text-sm mb-1">
            <FaUserMd className="text-blue-500" />
            <span>{healthcareProfessional.name}</span>
            <span className="text-blue-700">( {healthcareProfessional.specialization} )</span>
          </p>
          <h5 className="text-xl font-bold tracking-tight text-gray-900">
            {campName}
          </h5>
          <p className="text-gray-600 text-sm md:text-base mt-2 line-clamp-3">
            {description.slice(0, 130)}...
          </p>

          <p className="flex items-center gap-2 text-gray-700 text-sm mt-2">
            <FaMapMarkerAlt className="text-blue-500" />
            {location}
          </p>

          <div className="mt-4 flex justify-between items-center text-sm">
            <p className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <FaDollarSign className="text-blue-500" />
              {fees === 0 ? "Free" : `$${fees}`}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaUsers className="text-blue-500" />
              {participantCount}
            </p>
          </div>

          <div className="mt-4 flex justify-between items-center text-sm">
            <p className="flex items-center gap-2 text-gray-700">
              <FaCalendarAlt className="text-blue-500" />
              {date}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaClock className="text-blue-500" />
              {time}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link to={`/campsDetails/${_id}`}>
            <Button
              color=""
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-lg w-full"
            >
              See Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableCampCard;
