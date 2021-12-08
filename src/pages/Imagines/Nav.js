import {
  ArchiveIcon,
  ArrowLeftIcon,
  LightningBoltIcon,
  SaveIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search";

const Nav = () => {
  return (
    <div className="flex justify-around items-center font-Libre text-gray-800 pt-2 pb-3">
      <ArrowLeftIcon className="h-5 w-5" />
      <Link
        to="/"
        className="flex items-center py-1.5 px-2 pl-1 gap-1  ml-5 mr-8 rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
      >
        <ArchiveIcon className="h-5 w-5 ml-3" />{" "}
        <b className="md:block hidden">My Imagines</b>
      </Link>
      <Link
        to="/"
        className="flex items-center py-1.5 px-2 pl-1 gap-1  ml-5 mr-8 rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
      >
        <SaveIcon className="h-5 w-5 ml-3" />{" "}
        <b className="md:block hidden">Saved Imagines</b>
      </Link>
      <span>
        <Search placeholder="Search Imagines" />
      </span>
      <Link
        to="/"
        className="flex items-center py-1.5 px-2 pl-1 gap-1  ml-3 mr-8 rounded-3xl transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
      >
        <LightningBoltIcon className="h-5 w-5 ml-2" />{" "}
        <b className="md:block hidden">Create Imagine</b>
      </Link>
    </div>
  );
};

export default Nav;
