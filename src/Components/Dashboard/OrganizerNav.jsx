import React from 'react';
import NavLinks from '../Shard/NavLinks';
import { HiOutlineClipboardCheck, HiOutlineClipboardList, HiPlusCircle } from 'react-icons/hi';

const OrganizerNav = () => {
    return (
        <div>
            <div>
          <div className="text-gray-400 font-semibold">Organizer</div>
          <div className="space-y-2 mt-2">
            <NavLinks to='/dashboard/add-camp' name='Add A Camp' social={<HiPlusCircle />} />
            <NavLinks to='/dashboard/manage-camps' name='Manage Camps' social={<HiOutlineClipboardList />} />
            <NavLinks to='/dashboard/manage-registered-camps' name='Manage Registered Camps' social={<HiOutlineClipboardCheck />} />
          </div>
        </div>
        </div>
    );
};

export default OrganizerNav;