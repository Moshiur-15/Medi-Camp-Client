import React from "react";
import { Avatar, Button, Dropdown, Navbar, Toast } from "flowbite-react";
import Name from "../../assets/name.png";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
export default function NavBer() {
  const { user, logOut, setUser } = useAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
      setUser(null);
      toast.success("Log out successfully");
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
    }
  };

  return (
    <div className="container mx-auto">
      <Navbar
        fluid
        rounded
        className="bg-background bg-white"
      >
        <Navbar.Brand>
          <img src={Logo} className="h-6 sm:h-6" alt="Flowbite React Logo" />
          <img src={Name} className="h-6 sm:h-6" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user?.photoURL} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <NavLink
                  className={({ isActive }) =>
                    `hover:text-blue-500 font-bold ${
                      isActive ? "text-blue-500 underline" : "text-black"
                    }`
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Button
              color=""
              className="bg-blue-500 hover:bg-blue-600  text-white"
            >
              <Link className="text-base" to="/login">
                Join Us
              </Link>
            </Button>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-center gap-6">
          <NavLink
            className={({ isActive }) =>
              `hover:text-blue-500 font-bold ${
                isActive ? "text-blue-500 underline" : "text-black"
              }`
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `hover:text-blue-500 font-bold ${
                isActive ? "text-blue-500 underline" : "text-black"
              }`
            }
            to="/availableCamp"
          >
            Available Camp
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
