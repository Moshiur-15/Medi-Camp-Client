import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import Name from "../../assets/name.png";
import Logo from "../../assets/logo.png";

const NavBer = () => {
  const { user, logOut, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
  useEffect(() => {
    setModalOpen(false);
  }, [user]);

  return (
    <nav className="bg-white shadow-md">
      <section className="container mx-auto">
        <div className="flex justify-between items-center mx-2 xl:mx-20 py-3.5">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="h-8" alt="Logo" />
            <img src={Name} className="h-8" alt="Brand Name" />
          </Link>

          {/* User Authentication */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex space-x-6">
              {["Home", "Available Camp", "Gallery"]
                .concat(user ? ["Profile", "About Us"] : [])
                .map((item, index) => (
                  <NavLink
                    key={index}
                    to={
                      item === "Home"
                        ? "/"
                        : item === "Available Camp"
                        ? "/availableCamp"
                        : item === "Gallery"
                        ? "/gallery"
                        : item === "About Us"
                        ? "/about"
                        : "/dashboard/profile"
                    }
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

            {user ? (
              <>
                {/* User Image (Click to Open Modal) */}
                <img
                  src={user?.photoURL || "default-user.png"}
                  alt="User"
                  className="w-12 h-12 rounded-full cursor-pointer border border-gray-300"
                  onClick={() => setModalOpen(!modalOpen)}
                />

                {/* Modal */}
                {modalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                      {/* Close Icon */}
                      <button
                        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                        onClick={() => setModalOpen(false)}
                      >
                        <FaTimes className="w-6 h-6" />
                      </button>
                      <img
                        src={user?.photoURL || "default-user.png"}
                        alt="User"
                        className="w-20 h-20 rounded-full mx-auto border border-gray-300"
                      />
                      <p className="text-center mt-2 text-lg font-semibold">
                        {user?.displayName}
                      </p>
                      <p className="text-center text-sm text-gray-500">
                        {user?.email}
                      </p>

                      <div className="mt-4 flex justify-center gap-4">
                        <Link
                          to="/dashboard"
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                          onClick={() => setModalOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={handleLogOut}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                Join Us
              </Link>
            )}

            <button
              className="lg:hidden text-gray-700 focus:outline-none"
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
          <div className="flex flex-col items-center py-4">
            {["Home", "Available Camp", "Gallery",]
            .concat(user ? ["Profile", "About Us"] : [])
            .map(
              (item, index) => (
                <NavLink
                  key={index}
                  to={
                    item === "Home"
                      ? "/"
                      : item === "Available Camp"
                      ? "/availableCamp"
                      : item === "Gallery"
                      ? "/gallery"
                      : item === "About Us"
                      ? "/about"
                      : "/dashboard/profile"
                  }
                  className="text-lg font-semibold text-gray-700 hover:text-blue-500 py-2 hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              )
            )}
          </div>
        )}
      </section>
    </nav>
  );
};

export default NavBer;
