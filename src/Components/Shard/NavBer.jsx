import React from "react";
import { Avatar, Button, Dropdown, Navbar, Toast } from "flowbite-react";
import Name from "../../assets/name.jpg";
import Logo from "../../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from 'react-hot-toast'
export default function NavBer() {
  const { user, logOut } = useAuth();
  const handleLogOut = async () => {
    await logOut();
    toast.success('Log out successfully')
  };
  return (
    <div className="container mx-auto">
      <Navbar
        fluid
        rounded
        className="bg-background bg-white mx-0 lg:mx-6 xl:mx-14"
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
              <Dropdown.Item>Dashboard</Dropdown.Item>
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
        <Navbar.Collapse>
          <Navbar.Link className="text-base">
            <NavLink
              className={({ isActive }) =>
                `hover:text-blue-500 font-semibold w-full text-left ${
                  isActive ? "text-blue-600 underline" : "text-black"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </Navbar.Link>
          <Navbar.Link className="text-base">
            <NavLink
              className={({ isActive }) =>
                `hover:text-blue-500 font-semibold w-full text-left ${
                  isActive ? "text-blue-600 underline" : "text-black"
                }`
              }
              to="/availableCamp"
            >
              Available Camps
            </NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
