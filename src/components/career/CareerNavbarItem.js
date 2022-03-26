import React from "react";
import { NavLink } from "react-router-dom";

function CareerNavbarItem({ navTitle, route }) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        isActive
          ? "font-medium text-lg hover:shadow-md shadow-green-100 bg-teal-700 text-white px-5 py-1.5 rounded-lg  cursor-pointer"
          : "text-primary font-medium text-lg hover:shadow-md hover:shadow-green-100 hover:bg-teal-700 hover:text-white px-5 py-1.5 rounded-lg  cursor-pointer"
      }
    >
      {navTitle}
    </NavLink>
  );
}

export default React.memo(CareerNavbarItem);
