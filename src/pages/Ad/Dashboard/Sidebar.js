import React, { useState } from "react";

import { Link } from "react-router-dom";

import { ChevronLeft } from "react-feather";
import { PlusCircleIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  /**   const newEnv = useSelector((state) => state.env.newEnv);*/
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="md:flex">
        <div
          className={`${
            open
              ? "translate-x-0 ease-in opacity-100 z-50 bg-gray-900"
              : "-translate-x-full ease-out opacity-0"
          }
      absolute inset-0 transform md:transform-none opacity-0 md:opacity-100 duration-200 md:relative z-50 w-64
       dark:text-sky-400 bg-gray-100 md:bg-transparent transition dark:bg-gray-800  text-teal-600 h-screen p-3`}
        >
          <div class="flex justify-between">
            <button
              class="p-2 focus:outline-none focus:bg-purple-100 hover:bg-purple-200 rounded-md md:hidden"
              onClick={handleClose}
            >
              <ChevronLeft />
            </button>
          </div>
          <hr className="text-gray-700 md:hidden" />

          <nav className="text-base font-semibold mt-2 space-y-2 px-4">
            <>
              <span className="block py-2 px-10 mt-1 rounded-2xl text-2xl transition duration-200 mb-10 ">
                Dashboard
              </span>
              <Link
                onClick={handleClose}
                exact
                to="/ad/ad-category"
                className="block py-2 px-10 rounded-2xl transition duration-200  focus:text-white focus:bg-cyan-900 dark:hover:bg-cyan-900 
                bg-teal-600 hover:bg-teal-800 text-gray-100 hover:text-gray-100"
              >
                <span className="flex items-center space-x-2">
                  <PlusCircleIcon className="w-6 h-6 mr-2" /> Create Ad
                </span>
              </Link>
            </>
          </nav>
        </div>
      </div>
    </>
  );
};

export default React.memo(Sidebar);
