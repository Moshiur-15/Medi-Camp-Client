import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import SideBer from "../../Components/Dashboard/SideBer";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <div
        className={`overflow-x-hidden fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-md transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <SideBer />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="flex-1 min-h-screen bg-background">
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-white shadow-md md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 focus:outline-none"
          >
            {isSidebarOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>

        <div className="p-5 md:ml-64 mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
