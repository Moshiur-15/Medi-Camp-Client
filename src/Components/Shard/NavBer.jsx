import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import Name from "../../assets/name.png";
import Logo from "../../assets/logo.png";

const NavBer = () => {
  const { user, logOut, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = async () => {
    try {
      await logOut();
      setUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <section className="container mx-auto">
        <div className="flex justify-between items-center mx-2 xl:mx-36 py-3.5">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="h-8" alt="Logo" />
            <img src={Name} className="h-8" alt="Brand Name" />
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Available Camp"].map((item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : "/availableCamp"}
                className={({ isActive }) =>
                  `text-lg font-semibold transition duration-300 ${
                    isActive
                      ? "text-blue-500 underline"
                      : "text-gray-700 hover:text-blue-500"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* User Authentication */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative group">
                <img
                  src={
                    user?.photoURL || (
                      <FaUserCircle className="w-10 h-10 text-gray-500" />
                    )
                  }
                  alt="User"
                  className="w-12 h-12 rounded-full cursor-pointer border border-gray-300"
                />
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition duration-200">
                  <div className="p-3 border-b">
                    <p className="text-sm font-semibold">{user?.displayName}</p>
                    <p className="text-xs text-gray-500 truncate">
                      {user?.email}
                    </p>
                  </div>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Join Us
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-gray-200 shadow-md py-4">
            {["Home", "Available Camp"].map((item, index) => (
              <NavLink
                key={index}
                to={item === "Home" ? "/" : "/availableCamp"}
                className="text-lg font-semibold text-gray-700 hover:text-blue-500 py-2 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        )}
      </section>
    </nav>
  );
};

export default NavBer;
