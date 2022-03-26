import { ChatAlt2Icon } from "@heroicons/react/outline";
import React from "react";
import { NavLink } from "react-router-dom";

function CareerSidebarItem({ Icon, title, route }) {
  return (
    <div>
      <NavLink
        to={route}
        className={({ isActive }) =>
          isActive
            ? "rounded-full bg-gray-200  flex items-center space-x-4 px-6 py-2 justify-start cursor-pointer"
            : "rounded-full  hover:bg-gray-100 hover:-translate-y-1 transition transform flex items-center space-x-4 px-6 py-2 justify-start cursor-pointer"
        }
      >
        <Icon className="h-10 w-10  text-primary  " />
        <div className="text-primary text-lg font-semibold hover:-translate-y-1 transition transform mx-auto max-w-full">
          {title}
        </div>
      </NavLink>
    </div>
  );
}

export default React.memo(CareerSidebarItem);
