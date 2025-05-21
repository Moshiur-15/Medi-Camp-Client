import React from "react";
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
    <div
      className="bg-blue-50/80 border-2 hover:border-transparent duration-300 border-blue-300 flex flex-col hover:shadow-[0_8px_40px_rgba(37,99,235,0.30)]
s"
    >
      <img
        src={image}
        alt={campName}
        className="w-full h-[230px] object-cover"
      />

      <div className="flex flex-col justify-between flex-grow p-4 space-y-3">
        <p className="flex items-center gap-2 text-gray-700 text-sm">
          <FaUserMd className="text-blue-500" />
          {healthcareProfessional?.name}{" "}
          <span className="text-blue-700 font-medium">
            ({healthcareProfessional?.specialization})
          </span>
        </p>

        <h3 className="text-xl font-bold text-gray-900">{campName}</h3>

        <div className="space-y-1 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            {location}
          </p>
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            {date}
          </p>
          <p className="flex items-center gap-2">
            <FaClock className="text-blue-500" />
            {time?.startTime} - {time?.endTime}
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <FaDollarSign className="text-blue-500" />
            {fees === 0 ? "Free" : `${fees}৳`}
          </p>
          <p className="flex items-center gap-2 font-bold">
            <FaUsers className="text-blue-500" />
            Participants: {participantCount}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 mt-auto flex justify-end">
        <Link to={`/campsDetails/${_id}`}>
          <button className="bg-blue-500 hover:bg-blue-200/70 border  border-transparent hover:border-blue-200 hover:text-black text-white px-5 py-2 duration-500">
            SEE DETAILS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CampCard;
