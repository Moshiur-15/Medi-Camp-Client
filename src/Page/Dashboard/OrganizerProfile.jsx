import React, { useState } from "react";
import useAuth from "../../Hook/useAuth";
import ProfileModal from "../../Components/ProfileModal";
import { FaShieldAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const OrganizerProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  console.log(user);

  const { data: profile_data, refetch } = useQuery({
    queryKey: ["profile", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users-profile-data/${user?.email}`);
      return data;
    },
  });
  console.log(profile_data);

  return (
    <section className="flex flex-col justify-center items-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-lg">
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-t-2xl relative">
          <div className="relative w-24 h-24">
            <img
              alt="profile"
              src={user?.photoURL || "https://via.placeholder.com/150"}
              className="object-cover rounded-full h-24 w-24 border-4 border-white shadow-md"
            />
            <span className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full shadow-md">
              <FaShieldAlt />
            </span>
          </div>
          <h2 className="mt-3 text-xl font-semibold text-gray-800">
            {user?.displayName}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {/* Profile Details */}
        <div className="p-6 text-gray-700">
          <p className="text-sm">
            <span className="font-semibold">Location:</span>{" "}
            {profile_data ? profile_data?.location : ""}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Contact:</span>{" "}
            {profile_data ? profile_data?.contact : ""}
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Created Time:</span>{" "}
            {user?.metadata?.creationTime}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Last Login Time:</span>{" "}
            {user?.metadata?.lastSignInTime}
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Update Profile
          </button>
        </div>
      </div>
      <ProfileModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </section>
  );
};

export default OrganizerProfile;
