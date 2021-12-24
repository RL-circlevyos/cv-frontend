import React from "react";
import Sidebar from "./Sidebar";
import MyAds from "./MyAds";
import { Link } from "react-router-dom";
import { PlusCircleIcon, PlusIcon } from "@heroicons/react/solid";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center w-full font-Mulish h-screen">
      <div className="max-w-7xl w-full flex items-start justify-center lg:space-x-6 mt-10">
        <div className="lg:flex hidden lg:w-1/4">
          <Sidebar />
        </div>
        <div className="flex flex-col lg:w-2/4 w-full px-4 py-4">
          {/* <div className="w-full h-48">
            <img
              src="https://chartio.com/assets/24e451/tutorials/charts/grouped-bar-charts/c1fde6017511bbef7ba9bb245a113c07f8ff32173a7c0d742a4e1eac1930a3c5/grouped-bar-example-1.png"
              alt="graph"
              className="w-full h-full object-contain"
            />
          </div> */}
          <div className="lg:hidden flex justify-between items-center w-full mb-4 mt-5 absolute bottom-0 z-50">
            <div></div>
            <Link
              exact
              to="/ad/ad-category"
              className="block py-3 px-3 rounded-full mr-6 transition duration-200  focus:text-white 
              focus:bg-cyan-900 dark:hover:bg-cyan-900 
                bg-teal-400 hover:bg-teal-800 text-gray-100 hover:text-gray-100 "
            >
              <PlusIcon className="w-7 h-7 text-white" />
            </Link>
          </div>
          <div>
            <div className="text-lg font-bold bg-gray-100 flex justify-center mb-3 px-2 py-1 lg:w-1/2">
              Your Uploaded Ads
            </div>
            <MyAds />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
