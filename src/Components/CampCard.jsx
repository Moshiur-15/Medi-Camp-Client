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
  return (
    <Card
      className=""
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={camp.imgSrc}
    >
      {/* <div>
        <img
          className="w-full h-[230px] lg:h-[240px] xl:h-[260px] rounded-t-lg"
          src={camp.imgSrc}
          alt="not found"
        />
      </div> */}
      <div>
        <div className="space-y-2 flex-grow mb-3">
          {/* Camp name, location */}
          <h5 className="text-[22px] font-bold tracking-tight text-gray-900">
            {camp.name}
          </h5>

          {/* Description */}
          <p className="text-base md:text-lg">{camp.Description}</p>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 flex items-center gap-2 w-1/3">
              <FaUserMd className="text-blue-500" />
              Organized{camp.healthcareProfessional}
            </p>
            <p className="text-gray-700 flex items-center gap-2 w-1/3">
              <FaMapMarkerAlt className="text-blue-500" />
              {camp.location}
            </p>
            <p className="text-lg text-gray-800 font-semibold mt-2 flex items-center gap-2">
              <FaDollarSign className="text-blue-500" />
              {camp.fees}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-700 mt-1 flex items-center gap-2 w-1/3">
              <FaCalendarAlt className="text-blue-500" />
              {camp.date}
            </p>
            <p className="text-gray-700 mt-1 flex items-center gap-2 w-1/3">
              <FaClock className="text-blue-500" />
              {camp.time}
            </p>
            <p className="text-gray-700 mt-1 flex items-center gap-2">
              <FaUsers className="text-blue-500" />
              {camp.participantCount}
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <Button
            color=""
            className="bg-blue-500 hover:bg-blue-600 text-white w-full"
          >
            <Link className="text-base" to={`/camps/${camp.name}`}>
              Details
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CampCard;
