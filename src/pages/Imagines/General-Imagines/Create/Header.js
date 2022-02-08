import { ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div className="w-full grid place-items-center font-Mulish text-sm text-gray-800 pb-1">
      <div className="lg:block hidden fixed w-3/5 bg-gray-50 shadow z-50 pb-3 mt-12 px-4 py-2">
        <div className="flex justify-between items-center w-full max-w-6xl">
          <div className="flex items-center space-x-5 ">
            <Link to="/">
              <ArrowLeftIcon className="h-5 w-5 mr-4" />{" "}
            </Link>
          </div>
          <div className="text-2xl font-medium  text-primary">
            Create Imagines
          </div>
          <div className="flex items-center space-x-2 mt-4">
            {!title ? (
              <button className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200 bg-gray-300 text-white ">
                Publish
              </button>
            ) : (
              <button
                type="submit"
                className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm 
                lg:text-base transition duration-200 bg-primary text-gray-50 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              >
                Publish
              </button>
            )}
          </div>
          {/* <Link
          to="/"
          className="flex font-bold items-center py-1.5 px-2  rounded-3xl transition duration-200 bg-gray-200 text-gray-800 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
        >
          Saved Imagines
        </Link> */}
        </div>
      </div>
      <div className="block lg:hidden fixed w-full bg-gray-50 shadow z-50 pb-3 ">
        <div className="text-lg font-bold uppercase text-primary flex justify-between items-start px-3 mt-4 pt-14">
          <Link to="/">
            <ArrowLeftIcon className="h-5 w-5 mr-4" />{" "}
          </Link>
          <span>Create Imagines</span>
          <div className="flex items-center space-x-2 ">
            {!title ? (
              <button className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200 bg-gray-300 text-white ">
                Publish
              </button>
            ) : (
              <button
                type="submit"
                className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm 
                lg:text-base transition duration-200 bg-primary text-gray-50 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              >
                Publish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
