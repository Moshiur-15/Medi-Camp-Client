import React from "react";
import {
  HiChartBar,
  HiOutlineClipboardCheck,
  HiOutlineClipboardList,
  HiOutlineCreditCard,
  HiOutlineUser,
} from "react-icons/hi";
import NavLinks from "../Shard/NavLinks";

const ParticipantNav = () => {
  return (
    <div>
      <div className="text-gray-400 font-semibold">Participant</div>
      <div className="space-y-2 mt-2">
        <NavLinks to="/analytics" name="Analytics" social={<HiChartBar />} />
        <NavLinks
          to="/participant-profile"
          name="Participant Profile"
          social={<HiOutlineUser />}
        />
        <NavLinks
          to="/registered-camps"
          name="Registered Camps"
          social={<HiOutlineClipboardList />}
        />
        <NavLinks
          to="/payment-history"
          name="Payment History"
          social={<HiOutlineCreditCard />}
        />
        <NavLinks
          to="/dashboard/manage-registered-camps"
          name="Manage Registered Camps"
          social={<HiOutlineClipboardCheck />}
        />
      </div>
    </div>
  );
};

export default ParticipantNav;
