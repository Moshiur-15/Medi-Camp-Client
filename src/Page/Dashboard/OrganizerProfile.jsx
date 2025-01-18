import React from "react";
import useAuth from "../../Hook/useAuth";
import bgImg from "../../assets/profileBg.avif";

const OrganizerProfile = () => {
  const { user } = useAuth();
  return (
    <section className="flex flex-col justify-center items-center translate-y-1/2">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/6">
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-15 rounded-2xl"></div>
          <img
            alt="cover photo"
            src={bgImg}
            className="w-full mb-4 rounded-t-lg h-56 object-cover "
          />
        </div>
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-blue-500 rounded-full">
            User
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id:{user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              <button className="bg-blue-500 px-10 py-2 rounded-lg cursor-pointer hover:bg-blue-700 block text-white">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerProfile;
