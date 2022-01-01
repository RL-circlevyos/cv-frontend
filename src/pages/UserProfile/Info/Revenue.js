import React from "react";
import coin from "../../../assets/goldcoin.png";
import { ArchiveIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Revenue = () => {
  return (
    <div className="font-Mulish block">
      <span>
        <Link to="/selection">
          {" "}
          <button className="w-48 bg-yellow-400 rounded-lg py-2 px-4 flex items-center justify-center space-x-1">
            <span>
              <ArchiveIcon className="h-6 w-6" />
            </span>
            <span className="text-gray-800 text-base font-bold">
              My Revenue
            </span>
          </button>
        </Link>
      </span>
      <div className="flex items-center justify-start space-x-4 mt-4">
        <span className="text-xl font-bold">Total Coins</span>

        <span className="w-18 h-18">
          <img src={coin} alt="coinLogo" className="w-16 h-16" />
        </span>
        <span className="text-xl font-bold text-yellow-500 shadow-sm px-1 py-1">
          500
        </span>
      </div>
    </div>
  );
};

export default Revenue;
