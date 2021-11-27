import { ArrowLeftIcon, LightningBoltIcon } from "@heroicons/react/solid";
import React from "react";
import Search from "../../components/Search";

const Nav = () => {
  return (
    <div className="flex justify-evenly items-center space-x-3 font-Libre text-gray-800 pt-4 pb-5">
      <ArrowLeftIcon className="h-6 w-6" />
      <span className="text-xl">My Imagines</span>
      <span className="text-xl">Saved Imagines</span>
      <span>
        <Search placeholder="Search Imagines" />
      </span>
      <button
        className="flex items-center py-2.5 gap-2 px-4 mt-1 ml-6 mr-6 rounded-3xl transition duration-200 
      bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
      >
        <LightningBoltIcon className="h-6 w-6" /> Create Imagines
      </button>
    </div>
  );
};

export default Nav;
