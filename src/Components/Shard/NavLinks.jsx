import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ name, to, social }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 py-2 font-bold ${
          isActive ? "text-blue-600" : "text-black"
        }`
      }
    >
      <span className="text-xl">{social}</span>
      {name}
    </NavLink>
  );
};

export default NavLinks;
