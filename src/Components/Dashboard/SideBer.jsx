import React from "react";
import logo from "../../assets/logo.png";
import name from "../../assets/name.png";
import { Link, useNavigate } from "react-router-dom";
import OrganizerNav from "./OrganizerNav";
import ParticipantNav from "./participantNav";
import { HiUserCircle } from "react-icons/hi";
import NavLinks from "../Shard/NavLinks";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { FaSignOutAlt } from "react-icons/fa";
import useRole from "../../Hook/useRole";

const SideBer = () => {
  const { logOut, setUser } = useAuth();
  const navigate = useNavigate();
  const { role } = useRole();
  const handleLogOut = async () => {
    try {
      await logOut();
      setUser(null);
      toast.success("Log out successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
    }
  };
  return (
    <div className="w-64 min-h-screen pt-6 px-4 space-y-1 flex flex-col overflow-auto">
      <div className="mb-6 shadow-lg bg-blue-200/70 rounded p-2">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="logo" width="50" />
            <img src={name} alt="logo" width="100" height="100" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col flex-grow space-y-4">
        {role === "participant" && <ParticipantNav />}
        {role === "organizer" && <OrganizerNav />}
      </div>
      <div className="mt-auto">
        <div className="my-12">
          {role === "organizer" && (
            <NavLinks
              to="/dashboard/organizerProfile"
              name="OrganizerProfile"
              social={<HiUserCircle />}
            />
          )}
          {role === "participant" && (
            <NavLinks
              to="/dashboard/userProfile"
              name="UserProfile"
              social={<HiUserCircle />}
            />
          )}

          <button
            onClick={handleLogOut}
            className="flex items-center px-1 hover:bg-gray-100 w-full"
          >
            <span>
              <FaSignOutAlt className="mr-2 text-xl" />{" "}
            </span>
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBer;
