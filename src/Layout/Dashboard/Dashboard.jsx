import React from "react";
import NavBer from "../../Components/Shard/NavBer";
import Footer from "../../Components/Shard/Footer";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <NavBer />
      <Outlet />
      Dashboard
      <Footer />
    </div>
  );
};

export default Dashboard;
