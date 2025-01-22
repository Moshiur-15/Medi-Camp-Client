import React from "react";
import {
  HiChartBar,
  HiOutlineClipboardList,
  HiOutlineCreditCard,
} from "react-icons/hi";
import NavLinks from "../Shard/NavLinks";

const ParticipantNav = () => {
  return (
    <div>
      <div className="text-gray-400 font-semibold">Participant</div>
      <div className="space-y-2 mt-2">
        <NavLinks to="/dashboard/analytics" name="Analytics" social={<HiChartBar />} />
        <NavLinks
          to="/dashboard/registered-camps"
          name="Registered Camps"
          social={<HiOutlineClipboardList />}
        />
        <NavLinks
          to="/dashboard/payment-history"
          name="Payment History"
          social={<HiOutlineCreditCard />}
        />
      </div>
    </div>
  );
};

export default ParticipantNav;
