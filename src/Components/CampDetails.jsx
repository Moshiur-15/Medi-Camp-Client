import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePublic from "../Hook/usePublic";
import LoadingSpinner from "./LoadingSpinner";
import {
  FaCalendarAlt,
  FaClock,
  FaDollarSign,
  FaMapMarkerAlt,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";
import { Button } from "flowbite-react";
import useAuth from "../Hook/useAuth";
import CampJoinModal from "./CampJoinModal";
import { useQuery } from "@tanstack/react-query";

const CampDetails = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const axiosSecure = usePublic();

  const {
    data: camp,
    refetch,
    Loading,
  } = useQuery({
    queryKey: ["camp", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/campsDetails/${id}`);
      return data;
    },
  });

  if (Loading) return <LoadingSpinner />;

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
    <section className="py-10 lg:py-16">
      <div className="container mx-auto">
        {Loading ? (
          <LoadingSpinner />
        ) : (
          <div className="mx-5 md:mx-10 xl:mx-16">
            <div className="flex flex-col xl:flex-row bg-white rounded-lg sm:mx-20 items-center">
              <div className="xl:w-1/2 w-full h-full">
                <img
                  className="w-full h-[300px] lg:h-[400px] xl:h-full object-cover rounded-l-lg"
                  src={image}
                  alt="School-based health camp"
                />
              </div>

              <div className="xl:w-1/2 p-6 w-full">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {campName}
                </h2>
                <p className="text-gray-600 mb-4">
                  {description} Sessions on mental health awareness and free
                  psychological consultations.Sessions on mental health
                  awareness and free psychological consultations.Sessions on
                  mental health awareness and free psychological consultations.
                </p>
                <div className="bg-blue-100 rounded-lg p-4">
                  <h3 className="font-bold text-blue-900">
                    Additional Information
                  </h3>
                  <ul className="text-blue-800 text-sm mt-2 space-y-1.5">
                    <li>
                      <p className="flex items-center gap-2 text-gray-700 text-sm">
                        {healthcareProfessional && (
                          <>
                            <FaUserMd className="text-blue-500" />
                            {healthcareProfessional?.name}
                            <span className="text-blue-700">
                              ({healthcareProfessional.specialization})
                            </span>
                          </>
                        )}
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2 text-gray-700 text-sm w-1/3">
                        <FaCalendarAlt className="text-blue-500" />
                        {date}
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2 text-gray-700 text-sm w-1/2">
                        <FaClock className="text-blue-500" />
                        {time?.startTime} - {time?.endTime}
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2 text-gray-700 text-sm">
                        <FaMapMarkerAlt className="text-blue-500" />
                        {location}
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2 text-lg font-semibold text-gray-800 w-1/3">
                        <FaDollarSign className="text-blue-500" />
                        {fees === 0 ? "Free" : `$${fees}`}
                      </p>
                    </li>
                    <li>
                      <p className="flex items-center gap-2 text-gray-700 text-sm w-1/2">
                        <FaUsers className="text-blue-500" />
                        {participantCount}
                      </p>
                    </li>
                  </ul>
                </div>
                <Button
                  color=""
                  onClick={() => setOpen(true)}
                  disabled={!user}
                  className="mt-3 bg-blue-500 text-white hover:bg-blue-600  px-4 py-1 rounded-lg w-full"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=99995&format=png&color=FFFFFF"
                    className="h-5 w-5 mr-2"
                    alt=""
                  />
                  <span className="">Join Camp</span>
                </Button>
                <CampJoinModal
                  camp={camp}
                  user={user}
                  setOpen={setOpen}
                  open={open}
                  refetch={refetch}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CampDetails;
