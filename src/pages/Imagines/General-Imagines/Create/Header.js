import { ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full font-Mulish text-sm text-gray-800 pt-1 pb-1">
      <div className="lg:flex items-center space-x-2 hidden w-full justify-between px-3 py-2">
        <div className="flex items-center space-x-5 ">
          <Link to="/">
            <ArrowLeftIcon className="h-5 w-5 mr-4" />{" "}
          </Link>
        </div>
        <div className="text-2xl font-medium  text-primary">
          Create Imagines
        </div>
        <div></div>
        {/* <Link
          to="/"
          className="flex font-bold items-center py-1.5 px-2  rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
        >
          Saved Imagines
        </Link> */}
      </div>
      <div className="block lg:hidden">
        <div className="text-lg font-bold uppercase text-primary flex justify-center items-start px-3 mt-5">
          <Link to="/">
            <ArrowLeftIcon className="h-5 w-5 mr-4" />{" "}
          </Link>
          <span>Create Imagines</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
