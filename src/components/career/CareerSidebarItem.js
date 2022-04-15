import React from "react";
import { NavLink } from "react-router-dom";

function CareerSidebarItem({ Icon, title, route, color }) {
  return (
    <div>
      <NavLink
        to={route}
        className={({ isActive }) =>
          isActive
            ? "rounded-full bg-gray-200 flex items-center space-x-4 px-3 py-2 justify-start cursor-pointer"
            : "rounded-full  hover:bg-gray-100 hover:-translate-y-1 transition transform flex items-center space-x-4 px-3 py-2 justify-start cursor-pointer"
        }
      >
        <Icon className={`h-8 w-8 text-teal-700 `} />
        <div className="text-gray-600 text-lg font-Mulish font-medium hover:-translate-y-1 transition transform mx-auto max-w-full">
          {title}
        </div>
      </NavLink>
    </div>
  );
}

export default React.memo(CareerSidebarItem);
