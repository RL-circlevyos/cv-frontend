import { ArrowLeftIcon } from "@heroicons/react/solid";
import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";
import Navbar from "../../../../components/Navbar";
import List from "../General/List";
import Sidebar from "../Sidebar";

const SavedGeneral = () => {
  return (
    <div className="h-screen w-full font-Mulish fixed">
      <Navbar />
      <div className="flex justify-center items-start w-full">
        <div className="flex justify-around items-start w-full max-w-7xl">
          <div>
            <Sidebar />
          </div>
          <div className="flex justify-center items-center w-full max-w-lg flex-col mt-2 md:mt-5">
            <span className="w-full block mb-5">
              <span className=" flex items-center px-2 justify-center w-full">
                <div className="text-base font-medium text-primary flex justify-between items-start px-3 space-x-4">
                  <span
                    className="flex text-sm uppercase font-semibold justify-center items-center w-full py-1 px-3
          rounded-xl transition duration-200 bg-primary text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900
          hover:bg-teal-800 hover:text-gray-100"
                  >
                    General Imagines
                  </span>
                  <span>
                    <Link
                      to="/"
                      className="flex items-center py-1 px-3 font-semibold uppercase rounded-md text-sm transition duration-200
            bg-gray-200 text-primary focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
                    >
                      Story
                    </Link>
                  </span>
                </div>
              </span>
            </span>
            <div className="w-full flex justify-center items-center px-4">
              <Scrollbars
                thumbSize={1}
                autoHide
                style={{ width: "100%", height: "95vh" }}
              >
                <div className="w-full flex justify-center items-center">
                  <List />
                </div>
              </Scrollbars>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SavedGeneral);
