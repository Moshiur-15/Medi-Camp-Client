import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Shard/Footer";
import NavBer from "../../Components/Shard/NavBer";

const Main = () => {
  return (
    <div className="bg-background">
      <div className="bg-white sticky z-50 top-0">
        <NavBer />
      </div>
      <div className="min-h-[calc(100vh-360px)]">
        <Outlet />
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
