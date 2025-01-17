import React from "react";
import { Button, Card } from "flowbite-react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDollarSign,
  FaClock,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CampCard = ({ camp }) => {
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
  } = camp || {};
  return (
    <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-[230px] object-cover rounded-lg"
        src={image}
        alt={`${campName}`}
      />

      <div className="space-y-4 p-4 flex-grow">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          {campName}
        </h5>

        <div className="flex flex-wrap justify-between items-center gap-4">
          <p className="flex items-center gap-2 text-gray-700 text-sm">
            <FaUserMd className="text-blue-500" />
            {healthcareProfessional.name}{" "}
            <span className="text-blue-700">
              ( {healthcareProfessional.specialization} )
            </span>
          </p>
          <p className="flex items-center gap-2 text-gray-700 text-sm">
            <FaMapMarkerAlt className="text-blue-500" />
            {location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <p className="flex items-center gap-2 text-lg font-semibold text-gray-800 w-1/3">
            <FaDollarSign className="text-blue-500" />
            {fees === 0 ? "Free" : `$${fees}`}
          </p>
          <p className="flex items-center gap-2 text-gray-700 text-sm w-1/2">
            <FaUsers className="text-blue-500" />
            {participantCount}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <p className="flex items-center gap-2 text-gray-700">
            <FaCalendarAlt className="text-blue-500" />
            {date}
          </p>
          <p className="flex items-center gap-2 text-gray-700 text-sm w-1/2">
            <FaClock className="text-blue-500" />
            {time}
          </p>
        </div>
      </div>
      <div className="mt-auto">
        <Link to={`/campsDetails/${_id}`}>
          <Button
            color=""
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg w-full"
          >
            See Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default CampCard;
