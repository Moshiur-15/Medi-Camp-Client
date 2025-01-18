import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ name, to, social }) => {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-2 hover:bg-gray-200 p-2"
    >
      <span className="text-xl">{social}</span>
      {name}
    </NavLink>
  );
};

export default NavLinks;
