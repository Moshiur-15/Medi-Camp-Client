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
      className={`bg-blue-100/80  duration-300 flex flex-col hover:shadow-[0_8px_40px_rgba(37,99,235,0.30)] overflow-hidden h-full ${
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
          <p className="flex items-center gap-2 text-gray-700 text-sm">
            <FaUserMd className="text-blue-500" />
            {healthcareProfessional?.name}{" "}
            <span className="text-blue-700 font-medium">
              ({healthcareProfessional?.specialization})
            </span>
          </p>

          <h3 className="text-xl font-bold text-gray-900">{campName}</h3>
          <p className="text-gray-600 text-sm mt-1 mb-2 md:text-base line-clamp-3">
            {description.slice(0, 150)}...
          </p>
          <div className="space-y-1 text-sm text-gray-700 flex">
            <p className="flex items-center gap-2 w-1/2">
              <FaMapMarkerAlt className="text-blue-500" />
              {location.slice(0, 18)}
            </p>
            <p className="flex items-center gap-2 w-1/2">
              <FaClock className="text-blue-500" />
              {time?.startTime} - {time?.endTime}
            </p>
          </div>
          <div className="space-y-1 text-sm text-gray-700 flex ">
            <p className="flex items-center gap-2 w-1/2">
              <FaCalendarAlt className="text-blue-500 " />
              {date}
            </p>
            <p className="flex items-center gap-2 font-bold w-1/2">
              <FaUsers className="text-blue-500" />
              Participants: {participantCount}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Link to={`/campsDetails/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-200/70 border  border-transparent hover:border-blue-200 hover:text-black text-white px-6 py-2 duration-500">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableCampCard;
