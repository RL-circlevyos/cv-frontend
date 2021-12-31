import { ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import List from "./List";

const ImagineList = () => {
  return (
    <div className=" h-screen w-full font-Mulish">
      <Navbar />
      <span className="w-full">
        <span className=" flex  items-center  px-2 justify-between">
          <div className="text-base font-medium text-primary flex justify-between items-start mt-5 px-3 space-x-4">
            <span>
              {" "}
              <Link to="/">
                <ArrowLeftIcon className="h-5 w-5 mr-4 text-gray-800" />{" "}
              </Link>
            </span>

            <span
              className="flex text-sm uppercase font-semibold justify-center items-center w-full py-1 px-3 
          rounded-xl transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 
          hover:bg-teal-800 hover:text-gray-100"
            >
              General Imagines
            </span>
            <span>
              <Link
                to="/story-imagines/:id"
                className="flex items-center py-1 px-3 font-semibold uppercase rounded-md text-sm transition duration-200 
            bg-gray-200 text-primary focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
              >
                Story
              </Link>
            </span>
          </div>
        </span>
      </span>
      <div className="shadow-md mt-5"></div>
      <List />
    </div>
  );
};

export default React.memo(ImagineList);
