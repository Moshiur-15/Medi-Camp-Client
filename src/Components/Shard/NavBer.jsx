import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Name from "../../assets/name.jpg";
import Logo from "../../assets/logo.jpg";
export default function NavBer() {
  return (
    <div className="container mx-auto">
      <Navbar fluid rounded className="bg-background bg-white">
        <Navbar.Brand>
          <img src={Logo} className="h-6 sm:h-6" alt="Flowbite React Logo" />
          <img src={Name} className="h-6 sm:h-6" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-base" href="#">Home</Navbar.Link>
          <Navbar.Link className="text-base" href="#">Available Camps</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
