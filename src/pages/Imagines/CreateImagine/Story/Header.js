import { ArchiveIcon, ArrowLeftIcon, SaveIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full font-Mulish text-sm text-gray-800 pt-2 pb-3">
      <div className="lg:flex items-center space-x-2 hidden w-full justify-between px-3 py-2">
        {" "}
        <div className="flex items-center space-x-5 ">
          {" "}
          <ArrowLeftIcon className="h-5 w-5 mr-4" />{" "}
          <Link
            to="/imagines"
            className="flex font-bold items-center py-1.5 px-2 rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            My Imagines
          </Link>
          <Link
            to="/"
            className="flex font-bold items-center py-1.5 px-2  rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            Saved Imagines
          </Link>
        </div>
        <div className="text-2xl font-medium uppercase text-primary">
          Create Imagines
        </div>
        <div className="flex items-center space-x-5 ">
          <Link
            to="/create-general-imagine"
            className="flex text-base items-center py-1.5 px-3 rounded-xl transition duration-200 bg-gray-200 text-primary focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            General
          </Link>
          <Link
            to="/create-story-imagine"
            className="flex items-center py-1.5 px-3 rounded-xl text-base transition duration-200 bg-primary text-gray-100  focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            Story
          </Link>
        </div>
      </div>
      <div className="block lg:hidden">
        {" "}
        <div className="text-lg font-medium uppercase text-primary flex justify-between items-start px-3">
          <ArrowLeftIcon className="h-5 w-5 mr-4" />{" "}
          <span>Create Imagines</span>
          <span></span>
        </div>
        <div className="flex items-center justify-center space-x-3 mt-2 lg:hidden">
          {" "}
          <Link
            to="/imagines"
            className="flex font-bold items-center py-1.5 px-2 rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            <ArchiveIcon className="h-5 w-5 cursor-pointer text-primary" />
          </Link>
          <Link
            to="/"
            className="flex font-bold items-center py-1.5 px-2  rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            <SaveIcon className="h-5 w-5 cursor-pointer text-primary" />
          </Link>
          <Link
            to="/create-general-imagine"
            className="flex text-sm items-center py-1 px-2 rounded-sm transition duration-200 bg-gray-200 text-primary  focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            General
          </Link>
          <Link
            to="/create-story-imagine"
            className="text-sm flex items-center py-1.5 px-2 rounded-sm transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
          >
            Story
          </Link>
        </div>{" "}
      </div>
    </div>
  );
};

export default React.memo(Header);
